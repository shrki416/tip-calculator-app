const tipAmount = document.querySelector("#tip-amount");
const total = document.querySelector("#total-amount");
const billAmount = document.querySelector("#bill");
let numberOfPeople = document.querySelector("#number-of-people");
const inputWrapper = document.querySelector(".input-wrapper");
const ErrMsg = document.querySelector(".error-msg");

let billTotal = 0;
let tipPercentage = 0;
let numberOfPeopleTotal = 1;

billAmount.addEventListener("input", (e) => {
  billAmount.textContent = `$${e.target.value}`;
  billTotal = Number(e.target.value);
  return billTotal;
});

numberOfPeople.addEventListener("input", (e) => {
  numberOfPeople = Number(e.target.value);
  //   console.log(typeof numberOfPeople);
  //   if (numberOfPeople >= 0 && numberOfPeople === "") {
  //     inputWrapper.classList.add("error");
  //     ErrMsg.style.visibility = "visible";
  //   } else {
  //     inputWrapper.classList.remove("error");
  //     ErrMsg.style.visibility = "hidden";
  //     numberOfPeopleTotal = Number(e.target.value);
  //     return numberOfPeopleTotal;
  //   }

  if (numberOfPeople >= 0) {
    inputWrapper.classList.add("error");
    ErrMsg.style.visibility = "visible";
  }
});

const percentBtns = document.querySelectorAll(".percentages");
percentBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    tipPercentage = Number(e.target.value.slice(0, -1));
    calculateTip();
  });
});

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", reset);

function reset() {
  tipAmount.textContent = "$0.00";
  total.textContent = "$0.00";
  bill.textContent = "$0.00";
  numberOfPeople.value = 1;
  billAmount.value = 0;
}

function calculateTip() {
  numberOfPeople.value = numberOfPeopleTotal;

  const tip = (billTotal * tipPercentage) / 100;
  const totalAmount = billTotal + tip;
  const tipPerPerson = tip / numberOfPeopleTotal;
  const totalPerPerson = totalAmount / numberOfPeopleTotal;

  tipAmount.textContent = `$${tipPerPerson.toFixed(2)}`;
  total.textContent = `$${totalPerPerson.toFixed(2)}`;
}
