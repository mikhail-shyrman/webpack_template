export const calculatorHead = (append) => {
  //Head of calculator - tabs
  const calculatorHeadWrapper = document.createElement("div");
  calculatorHeadWrapper.classList.add("calculator-head");

  const calculatorBlockTitle = document.createElement("div");
  calculatorBlockTitle.textContent = "Calculator head";
  calculatorHeadWrapper.appendChild(calculatorBlockTitle);

  append.appendChild(calculatorHeadWrapper);
};