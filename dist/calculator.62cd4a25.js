//elements 
const select = document.querySelector("#select__input");
const dropdown = document.querySelector("#select__dropdown");
const arrowDown = document.querySelector("#icon__arrowDown");
const arrowUp = document.querySelector("#icon__arrowUp");
const inputs = document.querySelectorAll("form input");
const summaryTotal = document.querySelectorAll("#total-price");
//calcData
const calcData = {
    products: {
        amount: 0,
        priceUnit: 0.5,
        price: 0,
        description: null,
        function: setAmount
    },
    orders: {
        amount: 0,
        priceUnit: 0.25,
        price: 0,
        description: null,
        function: setAmount
    },
    package: {
        price: 0,
        description: null
    },
    accounting: {
        priceUnit: 35,
        price: 0,
        function: setBoolean
    },
    terminal: {
        priceUnit: 5,
        price: 0,
        function: setBoolean
    },
    total: 0
};
//calcData functions
function setTotal() {
    calcData.total = calcData.products.price + calcData.orders.price + calcData.package.price + calcData.accounting.price + calcData.terminal.price;
}
function setAmount(e) {
    this.amount = Number(e.target.value);
    this.price = this.amount * this.priceUnit;
    this.description = `${this.amount} * $${this.priceUnit}`;
    setTotal();
// console.log(calcData);
}
function setBoolean(e) {
    this.price = e.target.checked ? this.priceUnit : 0;
    setTotal();
// console.log(calcData);
}
function setPackage(e) {
    const data = e.target.dataset.value;
    select.querySelector("#select__text").innerHTML = data.charAt(0).toUpperCase() + data.slice(1);
    select.setAttribute("data-value", data);
    switch(data){
        case "basic":
            calcData.package.price = 0;
            calcData.package.description = "Basic";
            break;
        case "professional":
            calcData.package.price = 25;
            calcData.package.description = "Professional";
            break;
        case "premium":
            calcData.package.price = 60;
            calcData.package.description = "Premium";
            break;
    }
    setTotal();
    displayDropdown();
    displaySummary("package");
// console.log(calcData);
}
//handling input change
function handleInputChange(e) {
    calcData[e.target.name].function(e);
    displaySummary(e.target.name);
}
//dropdown displaying
function displayDropdown() {
    arrowDown.classList.toggle("not-visible");
    arrowUp.classList.toggle("not-visible");
    dropdown.classList.toggle("not-visible");
}
//summary displaying
function displaySummary(name) {
    const line = document.querySelector(`li[data-id="${name}"]`);
    const total = document.querySelector(`.summary__total`);
    if (calcData.total > 0 || calcData.package.description === "Basic") {
        total.style.display = "flex";
        total.querySelector(".total__price").innerHTML = `$${calcData.total}`;
    } else total.style.display = "none";
    if (calcData[name].price || calcData[name].description === "Basic") {
        line.style.display = "flex";
        line.querySelector("span.item__calc").innerHTML = calcData[name].description || "";
        line.querySelector("span.item__price").innerHTML = `$${calcData[name].price}`;
    } else line.style.display = "none";
}
// adding listeners
inputs.forEach((input)=>input.addEventListener("change", handleInputChange));
select.addEventListener("click", displayDropdown);
dropdown.addEventListener("click", setPackage);

//# sourceMappingURL=calculator.62cd4a25.js.map
