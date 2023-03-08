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
        price: this.products.amount * 0.5
    },
    orders: {
        amount: 0,
        price: this.orders.amount * 0.25
    },
    package: {
        price: 0
    },
    accounting: {
        isChecked: false,
        price: this.accounting.isChecked === true ? 35 : 0
    },
    terminal: {
        isChecked: false,
        price: this.terminal.isChecked === true ? 5 : 0
    }
};
//dropdown displaying
function displayDropdown() {
    if (arrowDown.style.display === "none") {
        arrowDown.style.display = "block";
        arrowUp.style.display = "none";
        dropdown.style.display = "none";
    } else {
        arrowDown.style.display = "none";
        arrowUp.style.display = "block";
        dropdown.style.display = "block";
    }
}
select.addEventListener("click", displayDropdown);
//summary displaying
function displaySummary(name) {
    const line = document.querySelector(`li[data-id="${name}"]`);
    const total = document.querySelector("#total-price");
    if (calcData[name]) line.style.display = "block";
    else line.style.display = "none";
    switch(name){
        case "accounting":
            line.querySelector("span.item__price").innerHTML = "$35";
            break;
        case "terminal":
            line.querySelector("span.item__price").innerHTML = "$5";
            break;
    }
}
//calculator functionality
function handleInputChange(e) {
    if (e.target.type != "checkbox") calcData[e.target.name.amount] = e.target.value ? e.target.value : false;
    else calcData[e.target.name.isChecked] = e.target.checked ? true : false;
    console.log(calcData);
    displaySummary(e.target.name);
}
function setSelectValue(e) {
    const data = e.target.dataset.value;
    select.querySelector("#select__text").innerHTML = data.charAt(0).toUpperCase() + data.slice(1);
    select.setAttribute("data-value", data);
    calcData.package.type = select.dataset.value;
    calcData.package.price = function() {
        data;
    };
    console.log(calcData);
    displayDropdown();
    displaySummary("package");
}
inputs.forEach((input)=>input.addEventListener("change", handleInputChange));
dropdown.addEventListener("click", setSelectValue);

//# sourceMappingURL=calculator.62cd4a25.js.map
