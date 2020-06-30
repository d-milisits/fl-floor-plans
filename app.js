// TODO: Animate .left .button on index.html to perform transform:translate
// styling on image! (index.html)

// TODO: Slide view on click for About page information?

var element = document.getElementById('btn');
var image = document.getElementsByClassName('floor');

element.addEventListener('mouseenter', function() {
  for (let i = 0; i < image.length; i++){
      image[i].classList.add('trans-' + i)
  }
});

element.addEventListener('mouseleave', function() {
    for (let i = 0; i < image.length; i++){
        image[i].classList.remove('trans-' + i)
    }
});

function loadAnimtation() {
    // setTimeout
}
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});