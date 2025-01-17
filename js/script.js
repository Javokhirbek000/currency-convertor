let usdToSum = 13000;
let euroToSum = 14000;
let rublToSum = 600;

let form = document.querySelector("#form");

form.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  let currencyInpValue = +document.querySelector("#currencyInp").value;
  let currencyOutputInp = document.querySelector("#currencyOutput");
  let select = e.target[2].value;

  if (select === "usd") {
    currencyOutputInp.value = currencyInpValue * usdToSum;
  } else if (select === "euro") {
    currencyOutputInp.value = currencyInpValue * euroToSum;
  } else if (select === "rubl") {
    currencyOutputInp.value = currencyInpValue * rublToSum;
  }else{
    currencyOutputInp.value = 'Invalid currency'
  }
}
