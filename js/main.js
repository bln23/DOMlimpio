'use strict';

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


//MENU TRIGGER

function init(){
  var menu = document.querySelector('.menu-nav');
  menu.addEventListener('click', menuTrigger);
}

function menuTrigger(){
  var menuHidden = document.querySelector('.nav-list');
  menuHidden.classList.toggle('active');
}

init();


//CALCULATOR
var hoursInput = document.querySelector('#hours-input');
var buttonCalc = document.querySelector('#submit-input');
var hourValueData = document.querySelector('#hour-value');
var monthValueData = document.querySelector('#salary-value');

buttonCalc.addEventListener('click',calculator);

function calculator() {
  var hours = hoursInput.value;
  var numberHours = parseInt(hours);
  if (numberHours > 40) {
    alert('El máximo de horas laborales legalmente permitido es de 40 horas semanales');
  }
  else if (numberHours <= 40 && numberHours > 35 ) {
    hourValueData.innerHTML = '5.50€';
    monthValueData.innerHTML = '880.72€';
    hoursInput.value = '';
  } else if (numberHours <= 35 && numberHours > 30) {
    hourValueData.innerHTML = '5.46€';
    monthValueData.innerHTML = '764.12€';
    hoursInput.value = '';
  } else if (numberHours <= 30 && numberHours > 25) {
    hourValueData.innerHTML = '5.44€';
    monthValueData.innerHTML = '653.39€';
    hoursInput.value = '';
  } else if (numberHours >= 24 && numberHours <= 25) {
    hourValueData.innerHTML = '5.42€';
    monthValueData.innerHTML = '542.66€';
    hoursInput.value = '';
  } else if (numberHours <= 20 && numberHours > 18 ) {
    hourValueData.innerHTML = '5.40€';
    monthValueData.innerHTML = '431.93€';
    hoursInput.value = '';
  } else if (numberHours <= 18 && numberHours > 16) {
    hourValueData.innerHTML = '5.512€';
    monthValueData.innerHTML = '396.93€';
    hoursInput.value = '';
  } else if (numberHours <= 16 && numberHours > 14) {
    hourValueData.innerHTML = '5.65€';
    monthValueData.innerHTML = '361.94€';
    hoursInput.value = '';
  } else {
    hourValueData.innerHTML = '5.37€';
    monthValueData.innerHTML = '260.71€';
    hoursInput.value = '';
  }
}
