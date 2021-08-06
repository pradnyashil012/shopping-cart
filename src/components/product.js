import React from "react";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="col-md-4 my-3">
      <img className="img-fluid" src={product.image} alt={product.name}></img>
      <h3>{product.name}</h3>
      <div>&#8377; {product.price}</div>
      <div>
        <button onClick={() => onAdd(product)} className="btn btn-success">
          Add To Cart
        </button>
      </div>
    </div>
  );
}
