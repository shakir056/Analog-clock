/*  clock */
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minute');
const seconds = document.querySelector('.second');

clock = () => {
    let Todaydate = new Date();
    let h = (Todaydate.getHours() % 12) + Todaydate.getMinutes() / 59; // 22 % 12 = 10pm
    let m = Todaydate.getMinutes(); // 0 - 59
    let s = Todaydate.getSeconds(); // 0 - 59
  
    h *= 30; 
    m *= 6;
    s *= 6; 
  
    rotation(hours, h);
    rotation(minutes, m);
    rotation(seconds, s);
    
    setTimeout(clock , 500)

  }
  
  rotation = (target, val) => {
    target.style.transform =  `rotate(${val}deg)`;
  }
  
  window.onload = clock();