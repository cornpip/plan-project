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

//-----------------------------------------------------------

function schtime(){
    let today = new Date();
    let time= today.toLocaleDateString();
    let property = document.getElementById('test');
    property.innerHTML = time;
}
