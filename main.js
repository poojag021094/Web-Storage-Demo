var htmlElem = document.querySelector('html');
var pElem = document.querySelector('p');
var imgElem = document.querySelector('img');

var bgColorForm = document.getElementById('bgcolor');
var fontForm = document.getElementById('font');
var imgForm = document.getElementById('image');

if(!localStorage.getItem('bgcolor')){
  populateStorage();
}else {
  setStyles();
}

function populateStorage(){
  localStorage.setItem('bgcolor', bgColorForm.value);
  localStorage.setItem('font', fontForm.value);
  localStorage.setItem('image',imgForm.value);

  setStyles();
}

function setStyles(){
  var currentColor = localStorage.getItem('bgcolor');
  var currentFont = localStorage.getItem('font');
  var currentImg = localStorage.getItem('image');

  bgColorForm.value = currentColor;
  fontForm.value = currentFont;
  imgForm.value = currentImg;

  htmlElem.style.backgroundColor = '#' + currentColor;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute('src', currentImg);
}
bgColorForm.onchange = populateStorage;
fontForm.onchange = populateStorage;
imgForm.onchange = populateStorage;
