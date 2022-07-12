var elForm = document.querySelector("#form");
var elMoneyInput = document.querySelector("#money");
var elOptionUSD = document.querySelector("#USD")
var elOptionEUR = document.querySelector("#EUR")
var elOptionRUB = document.querySelector("#RUB")
var elOptionUZS = document.querySelector("#UZS")
var elSelect = document.querySelector("#select");
var elHeading = document.querySelector("#h2");
var result1 = 0;


var USD = 10912.30;
var RUB = 172.46;
var EUR = 11138.18;
var UZS = 1;



elForm.addEventListener("submit", function(evt){
  evt.preventDefault();

  var elValue = elMoneyInput.value.trim();

  if(elValue && Number(elValue)){
    if(elSelect.value == elOptionUSD.value){
      result1 = elMoneyInput.value * USD;
      elHeading.textContent = result1 + " so'm";
    }
    else if(elSelect.value == elOptionEUR.value){
      result1 = elMoneyInput.value * EUR;
      elHeading.textContent = result1 + " so'm";
    }
    else if(elSelect.value == elOptionRUB.value){
      result1 = elMoneyInput.value * RUB;
      elHeading.textContent = result1 + " so'm";
    }
    else if(elSelect.value == elOptionUZS.value){
      result1 = elMoneyInput.value * UZS;
      elHeading.textContent = result1 + " so'm";
    }
    else{
      alert("Error")
    }
  }
  else{
    alert("Iltimos, raqam kiriting...")
  }
});