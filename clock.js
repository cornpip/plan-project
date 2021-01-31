let today = new Date();
console.log(today);

console.log(today.getDate());
console.log(today.getMonth()+1);
console.log(today.getFullYear());

let week = new Array('SUN','MON','SAT','WED','THU','FRI','SAT');

console.log(week[today.getDay()]);
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());

console.log(today.toLocaleDateString());
console.log(today.toLocaleTimeString());
console.log(today.toLocaleString());