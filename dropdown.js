//handling custom select
const select = document.querySelector('#calc__select');
const dropdown = document.querySelector('#select__dropdown');
const arrowDown = document.querySelector('#icon__arrowDown');
const arrowUp = document.querySelector('#icon__arrowUp');

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

function handleDropdownLogic(e){
    console.log(e.target)
}

select.addEventListener('click', displayDropdown);
select.addEventListener('click', handleDropdownLogic);
