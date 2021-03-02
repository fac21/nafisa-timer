# HTML & CSS explanation/notes

I first started with the html, giving the page a title, span elements and buttons.
Initially i  wrapped the minutes- 25 and seconds- 00 in two span elements. But once i got to the javascript i realised it would be better to store the actual value of the minutes and seconds in a let variable and assign them to the text of the const variables since they'd be changing. Therefore i chose to leave the span elements empty. 

I left the styling pretty basic as i spent most of the time on the Javascript, the only question i did have though is about the measurement properties that are best used. I mostly see rem and em used because they're more responsive and was wondering if that means we should avoid using pixels?

## Javascript explanation/notes

From making a slideshow previously, i decided to use the setInterval function because i knew that everything within the function it would take as an argument would run once, at every interval. Initially i didn't have a function to show the correct time e.g 25:0 was displaying instead of 25:00 but i wanted to come back to this. I also found that the page was displaying/counting down from 24:58. I realised this was because  i needed to set the let variable to 25 as well as making the text content of the const variable equal to it outside the function rather than inside.

 From then on i didn't have any problems with decrementing the variable and using if statements to keep it in bounds of what i wanted. Moving on to counting down from 5 minutes once the interval was cleared is what i probably spent a lot of time on.
 
  After clearing the setInterval i set minutes to 5 and seconds to 0 to see what would happen and it wasn't counting down anymore but just displaying 5. I thought of setting a variable to false at the beginning of the function and using if statements within the previous if statement where 0 was reached.
  
   Here i switched the state of the variable and used an if statement to say if reachFive is true to then set the minutes and seconds to 5 and 0. From then on i used the same concepts as before to countdown from 5, only this time i was clearing a different interval. Since there was a lot of the same code within this function i thought it was something to note down for when refactoring.

Finally i decided to update the code so that the right time would show. I decided to assign the zeros to let variables and used if statements for when they should be added to the original variable. Previously i noticed that i used the following lines at least three times and since my refactored code also incorporated this i thought the best practise would be to wrap it in a function. That way i could reuse the function when it was needed.

```
minutes.textContent = minutes2
seconds.textContent = seconds2

```

For the buttons, i was mainly stuck on the start/stop button. When clicked twice it did stop and start, but i was unsure why it wouldn't work again after that. I think it may have something to do with how i called the setInterval function. I read [here](https://www.freecodecamp.org/news/javascript-timers-everything-you-need-to-know-5f31eaa37162/) about timer ID's and thought that i didn't completely understand how they work.