const deg = 6;
const hr = document.querySelector('#hr')
const mn = document.querySelector('#mn')
const sc = document.querySelector('#sc')



setInterval(() => {
var dt = new Date;
var hh = dt.getHours() * 30;
var mm = dt.getMinutes() *deg;
var ss = dt.getSeconds() * deg;
var mili = dt.getMilliseconds()*(6/1000);





// sc.style.transform = `rotateZ(${ss}deg`;
sc.style.transform = `rotateZ(${ss+mili}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
}, .1);

