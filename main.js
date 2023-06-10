const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "c") {
      display.innerText = "";
    } else if (item.id == "←") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "e") {
      display.innerText = eval(display.innerText);
    } else {
      display.innerText += item.id;
    }
  };
});