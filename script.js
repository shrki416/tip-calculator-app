const tipAmount = document.querySelector("#tip-amount");
const totalAmount = document.querySelector("#total-amount");

let amount = 0;
let percentage = 0;
let people = 1;

function convertToNumber(item) {
  return Number(item);
}

const bill = document.querySelector("#bill");
bill.addEventListener("focus", (e) => (e.target.value = ""));
bill.addEventListener("input", (e) => getBillAmount(e));
function getBillAmount(e) {
  if (e.target.value === 0) return;

  amount = convertToNumber(e.target.value);
  calculateTip();
}

const percentageBtns = document.querySelectorAll(".percentages");
percentageBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => getPercentage(e));
});
function getPercentage(e) {
  const { id } = e.target;

  percentageBtns.forEach((btn) => {
    btn.classList.remove("active");
  });

  btn.classList.add("active");

  percentage = convertToNumber(id);
  calculateTip();
}

const customPercentInput = document.querySelector("#custom");
customPercentInput.addEventListener("input", (e) => getCustomPercentage(e));
function getCustomPercentage(e) {
  if (e.target.value === "") return;

  percentageBtns.forEach((btn) => {
    btn.classList.remove("active");
  });

  percentage = convertToNumber(e.target.value);
  calculateTip();
}

const numberOfPeople = document.querySelector("#number-of-people");
numberOfPeople.addEventListener("input", (e) => getNumberOfPeople(e));
function getNumberOfPeople(e) {
  if (e.target.value === "" && e.target.value === 0) return;
  people = convertToNumber(e.target.value);
  calculateTip();
}

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", reset);
function reset() {
  bill.value = 0;
  numberOfPeople.value = 1;
  customPercentInput.value = "";

  percentageBtns.forEach((btn) => {
    btn.classList.remove("active");
  });

  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";

  resetBtn.style.backgroundColor = "var(--inactive)";
}

function calculateTip() {
  console.log({ amount, percentage, people });
  if (amount === 0 && percentage === 0 && people === 0) {
    resetBtn.style.backgroundColor = "var(--inactive)";
    return;
  } else {
    resetBtn.style.backgroundColor = "var(--primary)";
    const tip = (amount * percentage) / 100;
    const total = amount + tip;

    tipAmount.textContent = `$${(tip / people).toFixed(2)}`;
    totalAmount.textContent = `$${(total / people).toFixed(2)}`;
  }
}
