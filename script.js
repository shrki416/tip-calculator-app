const reset = document.querySelector("#reset");
const tipAmount = document.querySelector("#tip-amount");
const total = document.querySelector("#total-amount");
const bill = document.querySelector("#bill");

// capture the bill input value
bill.addEventListener("input", (e) => {
  // remove the placeholder text
  e.target.placeholder = "";
  bill.textContent = `$${e.target.value}`;
  console.log(bill.textContent);
});

const percentBtns = document.querySelectorAll(".percentages");
percentBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // strip percentage sign
    const percentage = Number(e.target.value.slice(0, -1));
    console.log(`🍌`, { percentage }, typeof percentage);
  });
});

reset.addEventListener("click", () => {
  tipAmount.textContent = "$0.00";
  total.textContent = "$0.00";
  bill.textContent = "$0.00";
});
