import React from "react";

export default function Cart(props) {
  const { setCartItems, onAdd, onRemove } = props;

  const cartItems = localStorage.getItem("cartItems")?.split(";").map(JSON.parse) || [];

  const itemsPrice = cartItems?.reduce((a, c) => a + c.product.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.18;
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 && <div>Cart Is Empty!</div>}</div>
      {cartItems.map((item) => (
        <div key={item.product.id} className="row">
          <div className="col-2">{item.product.name}</div>
          <div className="col-2">
            <button onClick={() => onAdd(item.product)} className="add">
              +
            </button>
            <button onClick={() => onRemove(item.product)} className="remove">
              -
            </button>
          </div>
          <div className="col-2 text-right">
            {item.qty} X &#8377;{item.product.price.toFixed(2)}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div className="row">
            <div className="col-2">Items Price</div>
            <div className="col-1 text-right">
              &#8377;{itemsPrice.toFixed(2)}
            </div>
          </div>
          <div className="row">
            <div className="col-2">Tax Price</div>
            <div className="col-1 text-right">
              &#8377;{taxPrice.toFixed(2)}
            </div>
          </div>
          <div className="row">
            <div className="col-2">Shipping Price</div>
            <div className="col-1 text-right">
              &#8377;{shippingPrice.toFixed(2)}
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <strong>Total Price</strong>
            </div>
            <div className="col-1 text-right">
              <strong>&#8377;{totalPrice.toFixed(2)}</strong>
            </div>
          </div>
          <hr />
          <div className="row">
              <button className="button" onClick={() => {alert('Your order has been placed succesfully'); localStorage.removeItem("cartItems"); setCartItems([])}}>
                  Checkout
              </button>
          </div>
        </>
      )}
    </aside>
  );
}
