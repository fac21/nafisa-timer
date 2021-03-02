# HTML & CSS explanation/notes

I first started with the html, giving the page a title, span elements and buttons.
Initially i  wrapped the minutes- 25 and seconds- 00 in two span elements. But once i got to the javascript i realised it would be better to store the minutes and seconds in a let variable rather than a const. Therefore i chose to leave the span elements empty. 

I left the styling pretty basic as i spent most of the time on the Javascript, the only question i did have though is about the measurement properties that are best used. I mostly see rem and em used because they're more responsive so does that mean we should avoid using pixels?

## Javascript explanation/notes

From making a slideshow previously i decided to use the setInterval function because i knew that everything within the function it would take as an argument would run once, at every interval. Initially i didn't have a function to show the correct time e.g 25:0 was displaying instead of 25:00 but wanted to come back to this. I also found that the page was displaying/counting down from 24:58. I realised this was because  i needed to set the let variable to 25 as well as making the text content of the const variable equal to it outside the function rather inside.

 From then on i didn't have any problems with decrementing the variable and using if statements to keep it in bounds of what i wanted. Moving on to counting down from 5 minutes once the interval was cleared is what i probably spent a lot of time on.