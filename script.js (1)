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
