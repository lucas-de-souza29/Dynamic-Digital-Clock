const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const clock = setInterval(function time() {
    let dateToday = new Date();
    let hour = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds(); 

    if(hour < 10) 
       hr = '0' + hour;

    if(min < 10)
       min = '0' + min;

    if(sec < 10)
       sec = '0' + sec;

    hours.textContent = hour;
    minutes.textContent = min;
    seconds.textContent = sec;
})