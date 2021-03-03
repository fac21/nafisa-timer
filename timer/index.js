
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const startStop = document.getElementById("stop-start")
const reset = document.getElementById("reset")
const subtitle = document.getElementById("subtitle")

let minutes2 = 25 //starting with 25 minutes
let seconds2 = 0
let extraMin= 0
let extraSec = 0
subtitle.textContent= "WORK TIME"

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

let playing = true;
let timer = setInterval(myTimer, 1000)

   
  function myTimer() { //counting down from displayed time - 25
    let reachedFive = false;
    seconds2 -=1
    if (seconds2 < 0){
    seconds2 = 59
    minutes2 -= 1
    }
       if (minutes2 === 0 && seconds2 === 0){ 
   clearInterval(timer)  //once 0 is reached stop the function
   reachedFive = true //changing the variable to true
      if (reachedFive){ 
       minutes2 = 5 //so countdown from 5 minutes can now start
       seconds2 = 0
       subtitle.textContent= "REST TIME"
       let timer2 = setInterval(myFunction, 1000)
         function myFunction(){
          seconds2 -=1
          if (seconds2 < 0){
          seconds2 = 59
          minutes2 -= 1
        }
          if (minutes2 === 0 && seconds2 === 0){ 
          clearInterval(timer2) //stopping the function at 0 by clearing the interval
          }
         showRightTime()
        }
 }
 }
showRightTime() //updating text content of minutes and seconds with each change
}

reset.addEventListener("click", function(){
    minutes2 = 25 //setting minutes back to 25
    seconds2 = 0
    subtitle.textContent= "WORK TIME"
    showRightTime() //function to display this
  })

  startStop.addEventListener("click", function(){
    if (playing){  //variable is alreay set to true previously
     clearInterval(timer) //so if clicked setInterval function will stop
      startStop.textContent = "Start"
       playing = false //setting variable back to false
    }  else  if (playing == false){
    startStop.textContent = "Stop"
    timer = setInterval(myTimer, 1000) //starting setInterval again
      playing = true
      
    }
   })