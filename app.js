//although older, getelementbyID runs in half the time of queryselectorAll

// seperate functions faster than if?

//textContent has high number of operations per second

//if value of number is one or below, add disabled status to minus button.
//if value is 2 or above, remove disabled status


const minus = document.getElementById("minus");
const number = document.getElementById("number");
const plus = document.getElementById("plus");

const toggleMinusButton = () => {
  if(number.textContent <= 1) {
    minus.disabled = true;
  } else {
    minus.disabled = false;
  }
};

const addOne = () => {
  number.textContent = parseInt(number.textContent) + 1;
  toggleMinusButton()
};

const minusOne = () => {
  number.textContent = parseInt(number.textContent) - 1;
  toggleMinusButton()
};

toggleMinusButton();
minus.onclick = minusOne; 
plus.onclick = addOne; 
