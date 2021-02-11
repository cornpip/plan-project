let btn = document.querySelector("button.first");

btn.addEventListener("click", active);

function active() {
btn.classList.toggle("is_active");
}

let btn2 = document.querySelector("button.second");

btn2.addEventListener("click", active);

function active() {
btn2.classList.toggle("is_active");
}