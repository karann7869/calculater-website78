let calculation = '';


const button = document.querySelectorAll('.buttons');

const display = document.querySelector('.display');


button.forEach((button)=>{
  button.addEventListener('click',()=>{

    if (button.value === '1' 
      || button.value === '2' 
      || button.value === '3' 
      || button.value === '4'
      || button.value === '5' 
      || button.value === '6' 
      || button.value === '7' 
      || button.value === '8' 
      || button.value === '9' 
      || button.value === '0' 
      || button.value === '00'
      || button.value === '') {
      calculation += button.value
      display.innerHTML = calculation
    }
    if (button.value === '=') {
      calculation = eval(calculation);
      display.innerHTML = calculation;
    }
    if (button.value === 'clear') {
      calculation = '';
      display.innerHTML = button.value;
    }
  })
});

const opbutton = document.querySelectorAll('.buttono');

opbutton.forEach((button)=>{
  button.addEventListener('click',()=>{
    if (button.value === '+' 
      || button.value === '-' 
      || button.value === '%' 
      || button.value === '/' 
      || button.value === '*') {
      calculation += button.value;
      display.innerHTML = calculation;

    }
  })
});

const autoplay = document.querySelectorAll('.buttonAuto');

  autoplay.forEach((button)=>{
    button.addEventListener('click',()=>{
      setInterval(()=>{
        calculation = Math.random().toFixed(0)
        display.innerHTML = calculation
    },1000)
    })
    
  })
