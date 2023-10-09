import Header from "./header.js";
import productFunc from "./products.js";


//! add product to localStorage

const photos = await fetch("../js/data.json");
const data = await photos.json();

data ? localStorage.setItem("products", JSON.stringify(data)) : [];




const products = localStorage.getItem("products");
// console.log(JSON.parse(products));

const cartItems = document.querySelector(".header-cart-count");

cartItems.innerHTML = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart")).length
    : "0";