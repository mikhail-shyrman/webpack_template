export const calculatorFooter = (append) => {
  //Head of calculator - tabs
  const calculatorFooterWrapper = document.createElement("div");
  calculatorFooterWrapper.classList.add("calculator-footer");

  const calculatorBlockTitle = document.createElement("div");
  calculatorBlockTitle.textContent = "Calculator footer";
  calculatorFooterWrapper.appendChild(calculatorBlockTitle);

  append.appendChild(calculatorFooterWrapper);
};