// This is a single line comment, started with two slashes

/* This is a multi-line comment
Everything in here has no effect.
var test = 'This will not actually create a variable';
*/
// Everything after the slashes has no effect
console.log('Welcome')



// create references to the modal...
var modal = document.getElementById('myModal')
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('myImages')
// the image in the modal
var modalImg = document.getElementById('img01')
// and the caption in the modal
var captionText = document.getElementById('caption')

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i]
  // and attach our click listener for this image.
  img.onclick = function (evt) {
    modal.style.display = 'block'
    modalImg.src = this.src
    captionText.innerHTML = this.alt
  }
}



 var span = document.getElementsByClassName("close")[0];

 span.onclick = function() {
   modal.style.display = "none";
 }
 function menuToggle() {
   var x = document.getElementById('myNavtoggle');
   if (x.className === 'navtoggle') {
     x.className += ' responsive';
   } else {
     x.className = 'navtoggle';
   }
 }
