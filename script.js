let totalBill = 0;

window.onload = function() {
    let allButtons = document.querySelectorAll(".buy-btn");
    let messageElement = document.getElementById("delivery-msg");

    allButtons.forEach(function(button) {
        button.onclick = function(event) {
            event.preventDefault();

            let card = button.parentElement;
            let priceText = card.querySelector(".book-price").innerText;
            
            let priceNumber = parseInt(priceText.replace("Rs. ", ""));

            totalBill = totalBill + priceNumber;

            button.innerText = "Added!";
            
            // Saving the bill in browser memory
            localStorage.setItem("finalBill", totalBill);
            
            if (totalBill > 1000) {
                messageElement.innerHTML = "Total Bill: Rs. " + totalBill + "<br><strong>Free Delivery Available!</strong>";
            } else {
                messageElement.innerHTML = "Total Bill: Rs. " + totalBill + "<br>Delivery Charges: Rs. 100";
            }
        };
    });
};
let cart = [];

const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const cartItemsList = document.getElementById('cartItemsList');
const cartTotalPrice = document.getElementById('cartTotalPrice');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseInt(button.getAttribute('data-price'));
        addToCart(name, price);
    });
});

function addToCart(name, price) {
    cart.push({ name: name, price: price });
    updateCartUI();
}

function updateCartUI() {
    cartItemsList.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        const li = document.createElement('li');
        li.style.display = 'flex';
        li.style.justifyContent = 'space-between';
        li.style.padding = '10px';
        li.style.background = '#fff';
        li.style.marginBottom = '5px';
        li.style.borderRadius = '5px';
        li.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';

        li.innerHTML = `
            <span>${item.name} - Rs. ${item.price}</span>
            <button onclick="removeFromCart(${index})" style="background:#ff4d4d; color:white; border:none; padding:2px 8px; border-radius:3px; cursor:pointer;">X</button>
        `;
        
        cartItemsList.appendChild(li);
    });

    cartTotalPrice.innerText = total;
}

window.removeFromCart = function(index) {
    cart.splice(index, 1);
    updateCartUI();
};
