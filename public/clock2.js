console.log("hi");


var lookclock = document.querySelector(".time");
function clock(){
    let today = new Date();
    let time= today.toLocaleString();
    lookclock.innerHTML = `${time}`
}

function init(){
    setInterval(clock, 1000);
}
init();

console.log("hi");


