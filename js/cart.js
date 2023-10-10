import { cart } from "./products.js";

function displayCartProduct() {
    const cartWrapper = document.querySelector(".cart-wrapper")
    let result = "";
    cart.forEach((item) => {
        result += `
            <tr class="cart-item">
                <td></td>
                <td class="cart-image">
                    <img src= ${item.img.singleImage} alt="">
                    <i class="bi bi-x delete-cart"></i>
                </td>
                <td>${item.name}</td>
                <td>$${item.newPrice}</td>
                <td class="product-quantity">${item.quantity}</td>
                <td class="product-sbtotal">$</td>
            </tr>

        `;
        cartWrapper.innerHTML=result;
        console.log(result);
    });
}
displayCartProduct();