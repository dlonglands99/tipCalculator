//Init
let billAmount = document.getElementById("billAmount");
let tipPercentage = document.getElementById("tipPercentage");
let noOfPeople = document.getElementById("noOfPeople");
let result = document.getElementById("result");
let display = document.querySelector("h4");
let btnCalculate = document.getElementById("calculate");
let tipAmount = 0;

function calculateTips() {
    let amountToPay = Number(billAmount.value);
    let percentage = Number(tipPercentage.value);
    let numPeople = Number(noOfPeople.value);

    tipAmount = (amountToPay * (percentage / 100)) / numPeople;
    tipAmount = tipAmount.toFixed(2);
    result.textContent = tipAmount;
};

btnCalculate.addEventListener("click", () => {
    calculateTips();
    display.classList.remove("hidden");
});