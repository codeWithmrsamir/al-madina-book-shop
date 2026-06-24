window.onload = function() {
    let orderBillElement = document.getElementById("order-bill");
    let orderForm = document.querySelector("form");
    
    let savedBill = localStorage.getItem("finalBill");

    if (savedBill) {
        orderBillElement.innerText = "Your Total Bill: Rs. " + savedBill;
    } else {
        orderBillElement.innerText = "Your Total Bill: Rs. 0";
    }

    orderForm.onsubmit = function(event) {
        event.preventDefault();

        alert("Thank you! Your order has been placed successfully.");
        
        localStorage.removeItem("finalBill");
        
        orderForm.reset();
        orderBillElement.innerText = "Your Total Bill: Rs. 0";
    };
};
