import Header from "./components/header";
import Cart from "./components/cart";
import Main from "./components/main";
import data from "./data";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Checkout from "./components/checkOut";

function App() {
  const { products } = data;
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")?.split(";").map(JSON.parse) || []
  );

  const onAdd = (product) => {
    let cart = cartItems;

    const exist = cart.find((e) => e.product?.id === product.id);

    if (exist) {
      cart.forEach((e) => e.product.id === product.id && e.qty++);
    } else {
      cart.push({
        product,
        qty: 1,
      });
    }

    setCartItems([...cart]);

    cart = cart.map(JSON.stringify).join(";");

    localStorage.setItem("cartItems", cart);
  };

  const onRemove = (product) => {
    let cart = cartItems;

    const exist = cart.find((e) => e.product.id === product.id);

    if (exist) {
      cart.forEach((e) => e.product.id === product.id && e.qty--);
    } else {
      alert("Items not found in the cart");
    }

    cart = cart.filter((e) => e.qty);

    setCartItems([...cart]);

    cart = cart.map(JSON.stringify).join(";");

    localStorage.setItem("cartItems", cart);
  };

  return (
    <div className="App">
      <div className="row">
        <BrowserRouter>
          <Header
            countCartItems={cartItems.length}
            setSearchTerm={setSearchTerm}
          />
          <Switch>
            <Route exact path="/">
              <Main
                onAdd={onAdd}
                products={products}
                searchTerm={searchTerm}
              ></Main>
            </Route>
            <Route exact path="/cart">
              <Cart
                onAdd={onAdd}
                onRemove={onRemove}
                setCartItems={setCartItems}
              ></Cart>
            </Route>
            <Route exact path="/checkout">
              <Checkout setCartItems={setCartItems}></Checkout>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
