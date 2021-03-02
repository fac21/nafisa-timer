
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const stopStart = document.getElementById("stop-start")
const reset = document.getElementById("reset")

let minutes2 = 25 //starting with 25 minutes
let seconds2 = 0
let extraMin= 0
let extraSec = 0

function showRightTime(){  //adding "extra" zeros
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


let timer = setInterval(myTimer, 1000)

   
  function myTimer() { //counting down from displayed time - 25
    seconds2 -=1
    if (seconds2 < 0){
    seconds2 = 59
    minutes2 -= 1
    }
       if (minutes2 === 0 && seconds2 === 0){ 
   clearInterval(timer)  //once 0 is reached stop the function
 }
     
    
showRightTime() //updating text content of minutes and seconds with each change

}