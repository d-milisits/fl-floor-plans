// DEPRECATED CAROUSEL FUNCTIONALITY! May re-submit to master per client request. Please ignore.

// (function() {
//     "use strict";
//     var carousel = document.getElementsByClassName('carousel')[0],
//         slider = carousel.getElementsByClassName('carousel__slider')[0],
//         items = carousel.getElementsByClassName('carousel__slider__item'),
//         prevBtn = carousel.getElementsByClassName('carousel__prev')[0],
//         nextBtn = carousel.getElementsByClassName('carousel__next')[0];
//     var width, height, totalWidth, margin = 20,
//         currIndex = 0,
//         interval = 4000,
//         intervalTime = 2000;
//     function init() {
//         resize();
//         move(Math.floor(items.length / 2));
//         bindEvents();
      
//         timer();
//     }
//     function resize() {
//         width = Math.max(window.innerWidth * .25, 275),
//         height = window.innerHeight * .5,
//         totalWidth = width * items.length;
      
//         slider.style.width = totalWidth + "px";
      
//         for(var i = 0; i < items.length; i++) {
//             let item = items[i];
//             item.style.width = (width - (margin * 2)) + "px";
//             item.style.height = height + "px";
//         }
//     }
//     function move(index) {
//         if(index < 1) index = items.length;
//         if(index > items.length) index = 1;
//         currIndex = index;
      
//         for(var i = 0; i < items.length; i++) {
//             let item = items[i],
//             box = item.getElementsByClassName('item__3d-frame')[0];
//             if (i == index - 2){
//                 box.removeEventListener('mouseenter', clearTimer);
//                 box.removeEventListener('mouseleave', timer);
//             }
//             if(i == index - 1) {
//                 item.classList.add('carousel__slider__item--active');
//                 box.style.transform = "perspective(1200px)";
//                 box.addEventListener('mouseenter', clearTimer);
//                 box.addEventListener('mouseleave', timer);
//             } else if (i > index - 1) {
//                 item.classList.remove('carousel__slider__item--active');
//                 box.style.transform = "perspective(1200px) rotateY(" + (i < (index - 1) ? 40 : -40) + "deg)";
//             } else {
//                 item.classList.remove('carousel__slider__item--active');
//                 box.style.transform = "perspective(1200px) rotateY(" + (i < (index - 1) ? 40 : -40) + "deg)";
//             }
//         }
//         slider.style.transform = "translate3d(" + ((index * -width) + (width / 2) + window.innerWidth / 2) + "px, 0, 0)";
//     }
//     function timer() {
//         clearInterval(interval);    
//         interval = setInterval(() => {
//           move(++currIndex);
//         }, intervalTime);    
//     }
//     function clearTimer(){
//         clearInterval(interval);
//     }
//     function prev() {
//       move(--currIndex);
//     }
//     function next() {
//       move(++currIndex);    
//     }
//     function bindEvents() {
//         window.onresize = resize;
//         prevBtn.addEventListener('click', () => { prev(); });
//         nextBtn.addEventListener('click', () => { next(); });    
//     }
//     init();
//   })();


  
//   //current position
// var pos = 0;
// //number of slides
// var totalSlides = $('#slider-wrap ul li').length;
// //get the slide width
// var sliderWidth = $('#slider-wrap').width();
// $(document).ready(function(){
// 	/*****************
// 	 BUILD THE SLIDER
// 	*****************/
// 	//set width to be 'x' times the number of slides
// 	$('#slider-wrap ul#slider').width(sliderWidth*totalSlides);
//     //next slide 	
// 	$('#next').click(function(){
// 		slideRight();
// 	});
// 	//previous slide
// 	$('#previous').click(function(){
// 		slideLeft();
// 	});
// 	/*************************
// 	 //*> OPTIONAL SETTINGS
// 	************************/
// 	//automatic slider
// 	var autoSlider = setInterval(slideRight, 3000);
// 	//for each slide 
// 	$.each($('#slider-wrap ul li'), function() { 
// 	   //set its color
// 	   var c = $(this).attr("data-color");
// 	   $(this).css("background",c);
	   
// 	   //create a pagination
// 	   var li = document.createElement('li');
// 	   $('#pagination-wrap ul').append(li);	   
// 	});
// 	//counter
// 	countSlides();
// 	//pagination
// 	pagination();
// 	//hide/show controls/btns when hover
// 	//pause automatic slide when hover
// 	$('#slider-wrap').hover(
// 	  function(){ $(this).addClass('active'); clearInterval(autoSlider); }, 
// 	  function(){ $(this).removeClass('active'); autoSlider = setInterval(slideRight, 3000); }
// 	);
// });//DOCUMENT READY
// /***********
//  SLIDE LEFT
// ************/
// function slideLeft(){
// 	pos--;
// 	if(pos==-1){ pos = totalSlides-1; }
// 	$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 	
	
// 	//*> optional
// 	countSlides();
// 	pagination();
// }
// /************
//  SLIDE RIGHT
// *************/
// function slideRight(){
// 	pos++;
// 	if(pos==totalSlides){ pos = 0; }
// 	$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 
	
// 	//*> optional 
// 	countSlides();
// 	pagination();
// }
// /************************
//  //*> OPTIONAL SETTINGS
// ************************/
// function countSlides(){
// 	$('#counter').html(pos+1 + ' / ' + totalSlides);
// }

// function pagination(){
// 	$('#pagination-wrap ul li').removeClass('active');
// 	$('#pagination-wrap ul li:eq('+pos+')').addClass('active');
// }
		
	