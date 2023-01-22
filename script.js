const reset = document.querySelector("#reset");
const tipAmount = document.querySelector("#tip-amount");
const total = document.querySelector("#total-amount");

reset.addEventListener("click", () => {
  tipAmount.textContent = "$0.00";
  total.textContent = "$0.00";
});
