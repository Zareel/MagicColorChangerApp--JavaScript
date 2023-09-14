const red = document.querySelector("#red");
const yellow = document.querySelector("#yellow");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const pink = document.querySelector("#pink");
const purple = document.querySelector("#purple");

const center = document.querySelector(".center");

const getBGcolor = (selectedEelement) => {
  return window.getComputedStyle(selectedEelement).backgroundColor;
};

const magicColorChanger = (element, color) => {
  element.addEventListener("mouseover", () => {
    center.style.backgroundColor = color;
  });
};

magicColorChanger(red, getBGcolor(red));
magicColorChanger(yellow, getBGcolor(yellow));
magicColorChanger(green, getBGcolor(green));
magicColorChanger(blue, getBGcolor(blue));
magicColorChanger(pink, getBGcolor(pink));
magicColorChanger(purple, getBGcolor(purple));
