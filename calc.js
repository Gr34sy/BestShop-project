//elements 
const select = document.querySelector('#select__input');
const dropdown = document.querySelector('#select__dropdown');
const arrowDown = document.querySelector('#icon__arrowDown');
const arrowUp = document.querySelector('#icon__arrowUp');
const inputs = document.querySelectorAll("form input");


const summaryTotal = document.querySelectorAll('#total-price');

//calcData
const calcData = {
    products: {
        amount: 0,
        priceUnit: 0.5,
        price: 0,
        description: null,
        function: setAmount,
    },  
    orders: {
        amount: 0,
        priceUnit: 0.25,
        price: 0,
        description: null,
        function: setAmount,
    },
    package:{
        price: 0,
        description: null,
        function: setPackage,
    },
    accounting:{
        priceUnit: 35,
        price: 0,
        function: setBoolean,
    },
    terminal:{
        priceUnit: 5,
        price: 0,
        function: setBoolean,
    },

    total: 0,
}

//calcData functions
function setTotal(){
    calcData.total = calcData.products.price  + calcData.orders.price + calcData.package.price + calcData.accounting.price + calcData.terminal.price;
}

function setAmount(e){
    this.amount = Number(e.target.value);
    this.price = this.amount * this.priceUnit;
    this.description = `${this.amount} * $${this.priceUnit}`;

    setTotal();
    console.log(calcData);
}

function setPackage(e){
    const data = e.target.dataset.value;
    select.querySelector('#select__text').innerHTML = data.charAt(0).toUpperCase() + data.slice(1);
    select.setAttribute('data-value',data);

    switch(data){
        case 'basic':
            calcData.package.price = 0;
            calcData.package.description = 'Basic';
            break;
        case 'professional':
            calcData.package.price = 25;
            calcData.package.description = 'Professional';
            break;
        case 'premium':
            calcData.package.price = 60;
            calcData.package.description = 'Premium';
            break;
    }

    displayDropdown();
    setTotal();
    console.log(calcData);
}

function setBoolean(e){
    this.price = e.target.checked ? this.priceUnit : 0;

    setTotal();
    console.log(calcData);
}

//dropdown displaying
function displayDropdown(){
    if(arrowDown.style.display === 'none'){
        arrowDown.style.display = 'block';
        arrowUp.style.display = 'none';
        dropdown.style.display = 'none';
    }else{
        arrowDown.style.display = 'none';
        arrowUp.style.display = 'block';
        dropdown.style.display = 'block';
    }
}

select.addEventListener('click', displayDropdown);

//handling input change
function handleInputChange(e){
    calcData[e.target.name].function(e);
}


// adding listeners
inputs.forEach((input) => input.addEventListener('change', handleInputChange));
dropdown.addEventListener('click', setPackage);