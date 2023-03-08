//elements 
const select = document.querySelector('#select__input');
const dropdown = document.querySelector('#select__dropdown');
const arrowDown = document.querySelector('#icon__arrowDown');
const arrowUp = document.querySelector('#icon__arrowUp');
const inputs = document.querySelectorAll("form input");


const summaryTotal = document.querySelectorAll('#total-price');

//input values
const inputValues = {
    products: null,
    orders: null,
    package: null,
    accounting: null,
    terminal: null,
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

//summary displaying
function displaySummary(name){
    const line = document.querySelector(`li[data-id="${name}"]`);

    if(inputValues[name]){
        line.style.display = 'block';
    }else{
        line.style.display = 'none';
    }
    console.log(line);
}

//calculator functionality
function handleInputChange(e){
    if(e.target.type != 'checkbox'){
        inputValues[e.target.name] = e.target.value ? e.target.value : false;
    }else{
        inputValues[e.target.name] = e.target.checked ? true : false;
    }

    console.log(inputValues);
    displaySummary(e.target.name);
}

function setSelectValue(e){
    const data = e.target.dataset.value;

    select.querySelector('#select__text').innerHTML = data.charAt(0).toUpperCase() + data.slice(1);
    select.setAttribute('data-value',data);
    inputValues.package = select.dataset.value;

    console.log(inputValues);
    displayDropdown();
    displaySummary('package');
}

inputs.forEach((input) => input.addEventListener('change', handleInputChange));
dropdown.addEventListener('click', setSelectValue);