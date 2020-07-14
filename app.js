// Listens for mouse cursor entering/leaving entire image. Triggers transition animation on mouse enter,
// and de-selects on mouse leave.
var element = document.getElementById('btn');
var image = document.getElementsByClassName('floor');

// Trigger
element.addEventListener('mouseenter', function() {
  for (let i = 0; i < image.length; i++){
      image[i].classList.add('trans-' + i)
  }
});

// Removal
element.addEventListener('mouseleave', function() {
    for (let i = 0; i < image.length; i++){
        image[i].classList.remove('trans-' + i)
    }
});

function loadAnimtation() {
    // setTimeout
}