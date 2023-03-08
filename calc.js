//elements 
const select = document.querySelector('#select__input');
const dropdown = document.querySelector('#select__dropdown');
const arrowDown = document.querySelector('#icon__arrowDown');
const arrowUp = document.querySelector('#icon__arrowUp');
const inputs = document.querySelectorAll("form input");


const summaryTotal = document.querySelectorAll('#total-price');

//calcData
const calcData = {

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
function handleInputChange(){

}

//setting select value
function setSelectValue(e){
    const data = e.target.dataset.value;

    select.querySelector('#select__text').innerHTML = data.charAt(0).toUpperCase() + data.slice(1);
    select.setAttribute('data-value',data);
}


inputs.forEach((input) => input.addEventListener('change', handleInputChange));
dropdown.addEventListener('click', setSelectValue);