import { mult } from "./js/mult";
import { sum } from "./js/sum";
import "./index.html";
import "./index.scss";
import eth from "./images/coins/eth.svg";

const calcTotal = () => {
  return mult(5, 2) + sum(5, 2);
};

const imageWrapper = document.querySelector(".eth");
const img = new Image();
img.src = eth;
img.width = 25;
imageWrapper.append(img);

console.log(mult(5, 2));
console.log(sum(5, 2));
console.log(calcTotal());

