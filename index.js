const body = document.body
const div = document.getElementsByClassName("form-check form-switch")
const sw = document.getElementsByClassName("form-check-input")

if (sw == 1) {
    body.style.background = "black";
    body.style.color = "white";

} else {
    body.style.background = " ";
    body.style.color = " ";
}


// div.append(sw);
// body.append(div);