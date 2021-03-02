
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const stopStart = document.getElementById("stop-start")
const reset = document.getElementById("reset")

let minutes2 = 25
let seconds2 = 0
let extraMin= 0
let extraSec = 0

function showRightTime(){
    if (minutes2 < 10){
      minutes.textContent = extraMin + "" + minutes2
    } else if (minutes2 >= 10){
      minutes.textContent = minutes2
    }
     if (seconds2 < 10){
      seconds.textContent = extraSec + "" + seconds2
    } else if (seconds2 >= 10){
      seconds.textContent = seconds2
    }
    
  }
  
showRightTime()