import React from "react";
import Product from "./product";

export default function Main(props) {
    const {products, onAdd, searchTerm} = props;
    return (
    <main >
        
        <div className="container">
        <h2>Products</h2>
            <div className="row">
               
                        {products.filter((product) => searchTerm.trim() !== "" ? product.name.toLowerCase().includes(searchTerm.trim().toLowerCase()) : true
                    /*
                        if(searchTerm == ""){
                            return product;
                        }else if(product.name.toLowerCase().includes(searchTerm.toLowerCase())){
                            return product;
                        }
                    */
                    ).map((product) => (
                        <Product key={product.id} product={product} onAdd={onAdd}></Product>
                    ))}
               
            </div>    
        </div>
    </main>
    )
}