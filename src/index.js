import "./index.html";
import "./index.scss";
import { calculatorHead } from "./js/calculatorHead";
import { calculatorBody } from "./js/calculatorBody";
import { calculatorFooter } from "./js/calculatorFooter";

const exchangerWrapper = document.querySelector("#exchanger");

document.addEventListener("DOMContentLoaded", function() {
  calculatorHead(exchangerWrapper);
  calculatorBody(exchangerWrapper);
  calculatorFooter(exchangerWrapper);
});

