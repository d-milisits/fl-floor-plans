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
