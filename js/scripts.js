//This is a single line comment, started with two slashes

/* This is a multi-line comment
Everything in here has no effect.
var test = 'This will not actually create a variable';
*/
 //Everything after the slashes has no effect

 console.log("Welcome to my site!");


 function menuToggle() {
   var x = document.getElementById('myNavtoggle');
   if (x.className === 'navtoggle') {
     x.className += ' responsive';
   } else {
     x.className = 'navtoggle';
   }
 }
