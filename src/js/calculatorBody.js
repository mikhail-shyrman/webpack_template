export const calculatorBody = (append) => {
  //Head of calculator - tabs
  const calculatorBodyWrapper = document.createElement("div");
  calculatorBodyWrapper.classList.add("calculator-body");

  const calculatorBlockTitle = document.createElement("div");
  calculatorBlockTitle.textContent = "Calculator body";
  calculatorBodyWrapper.appendChild(calculatorBlockTitle);

  append.appendChild(calculatorBodyWrapper);
};