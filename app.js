let toggleBtn = document.getElementById("checkbox"),
    amount = document.querySelectorAll(".amount");


toggleBtn.addEventListener("click", function(){
    if(toggleBtn.checked === true){
        amount.forEach(amt => {
            amt.innerText = (amt.innerText/10.00).toFixed(3);
        });
    }
    if(toggleBtn.checked === false){
        amount.forEach(amt => {
            amt.innerText = (amt.innerText * 10.00).toFixed(2);
        });
    }
});