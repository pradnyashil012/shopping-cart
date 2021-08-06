import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
    const {countCartItems, setSearchTerm} = props;
    return (

        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
            <a className="navbar-brand" href="/">
               <h2>Shopper </h2>
            </a>
        
            <div className="d-flex  justify-content-end" id="navbarSupportedContent">
               <div className="d-inline p-2">
                    
                    <input className="form-control mb-3 " type="search" placeholder="Search"
                    onChange={event => {setSearchTerm(event.target.value)}} aria-label="Search" />
                   
             
               </div>
               <div className="d-inline p-2">
               <a href="/cart" component={Link}>
                     <h2>
                         Cart {' '}
                        {countCartItems && (
                             <button className="badge">{countCartItems}</button>
                         )}
                     </h2>
                </a>{' '}
             </div> 
            </div>
        </nav>
        </div>

        // <header className="row block center">
        //     <div>
        //         <a href="#/">
        //             <h2>Catalogue</h2>
        //         </a>
        //     </div>
        //     <div>
        //         <input type="text" placeholder="Search..." 
        //         onChange={event => {setSearchTerm(event.target.value)}} />
        //     </div>
        //     <div>
                
        //         <a href="#/cart">
        //             <h2>
        //                 Cart {' '}
        //                 {countCartItems && (
        //                     <button className="badge">{countCartItems}</button>
        //                 )}
        //             </h2>
        //         </a>{' '}
        //     </div>
        // </header>
    )
}