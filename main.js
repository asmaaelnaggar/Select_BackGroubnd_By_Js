function changeColor() {
let selectColor =
    document.getElementById("selectColor");

let selectedColor =
    selectColor.options[selectColor.selectedIndex].value;
    document.body.style.background = selectedColor;
}