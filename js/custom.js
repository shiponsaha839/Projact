document.write("coutom.js");
alert("The File is work");

$('.counter').counterUp({
    delay: 10,
    time: 2000
  });
  $('.counter').addClass('animated fadeInDownBig');
  $('h3').addClass('animated fadeIn');
  
  document.body.innerHTML = "This is javascript";