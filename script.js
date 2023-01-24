const tipAmount = document.querySelector("#tip-amount");
const totalAmount = document.querySelector("#total-amount");
const errorMsg = document.querySelectorAll(".error-msg");

let amount = 0;
let percentage = 0;
let people = 1;

function convertToNumber(item) {
  return Number(item);
}

function validateUserInput() {
  numberOfPeople.value = numberOfPeople.value.replace(/[^0-9]/g, "");
}

function formatCurrency(amount) {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

function formatNumber(amount) {
  return amount.toLocaleString("en-US", {
    maximumFractionDigits: 2,
  });
}

function errorCheck(e) {
  const element = document.querySelector(`[data-${e.target.id}]`);
  if (e.target.value === "0") {
    element.style.visibility = "visible";
    e.target.closest(".input-wrapper").classList.add("error");
  } else {
    element.style.visibility = "hidden";
    e.target.closest(".input-wrapper").classList.remove("error");
  }
}

const bill = document.querySelector("#bill");
bill.addEventListener("focus", (e) => (e.target.value = ""));
bill.addEventListener("input", (e) => getBillAmount(e));

function getBillAmount(e) {
  errorCheck(e);
  if (e.target.value === "0" || e.target.value === "") return;

  e.target.value = formatNumber(e.target.value.substring(0, 10));

  amount = convertToNumber(e.target.value);
  calculateTip();
}

const percentageBtns = document.querySelectorAll(".percentages");
percentageBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => getPercentage(e));
});

function getPercentage(e) {
  percentageBtns.forEach((btn) => {
    btn.classList.remove("active");
  });

  e.target.classList.add("active");

  percentage = convertToNumber(e.target.id);
  calculateTip();
}

const customPercentInput = document.querySelector("#custom");
customPercentInput.addEventListener("input", (e) => getCustomPercentage(e));

function getCustomPercentage(e) {
  if (e.target.value === "") return;

  percentageBtns.forEach((btn) => {
    btn.classList.remove("active");
  });

  e.target.value = e.target.value.substring(0, 5);

  percentage = convertToNumber(e.target.value);
  calculateTip();
}

const numberOfPeople = document.querySelector("#number-of-people");
numberOfPeople.addEventListener("focus", (e) => (e.target.value = ""));
numberOfPeople.addEventListener("keyup", validateUserInput);
numberOfPeople.addEventListener("input", (e) => getNumberOfPeople(e));

function getNumberOfPeople(e) {
  errorCheck(e);
  if (e.target.value === "0" || e.target.value === "") return;

  people = convertToNumber(e.target.value);
  calculateTip();
}

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", reset);

function reset() {
  bill.value = 0;
  numberOfPeople.value = 0;
  customPercentInput.value = "";

  percentageBtns.forEach((btn) => {
    btn.classList.remove("active");
  });

  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";

  errorMsg.forEach((msg) => (msg.style.visibility = "hidden"));
  document.querySelector(".input-wrapper").classList.remove("error");

  resetBtn.style.backgroundColor = "var(--inactive)";
}

function calculateTip() {
  console.log({ amount, percentage, people });
  if (amount === "0" && percentage === "0" && people === "0") {
    resetBtn.style.backgroundColor = "var(--inactive)";
    return;
  } else {
    resetBtn.style.backgroundColor = "var(--primary)";
    const tip = (amount * percentage) / 100;
    const total = amount + tip;

    const tipAmountResult = formatCurrency(tip / people);
    const totalAmountResult = formatCurrency(total / people);

    tipAmount.textContent = tipAmountResult;
    totalAmount.textContent = totalAmountResult;
  }
}
