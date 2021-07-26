let nCount = function(selector) {
  $(selector).each(function () {
    $(this).animate({
      counter: $(this).text()
    },
    {
      duration : 4000,
      easing : "swing",
        step: function(value) {
           $(this).text(Math.floor(value))
      
        }
    
    });
   });
}

let a = 0;
$(window).scroll(function(){

let oTop = $(".numbers").offset().top - window.innerHeight
if ( a == 0 && $(window).scrollTop() >= oTop){
  a++
  nCount(".rect > h3");
}
})


/* navbar */


let navbar = $(".navbar")

$(window).scroll(function(){
  
  let oTop = $(".section2").offset().top - window.innerHeight;
  if($(window).scrollTop() > oTop){
    navbar.addClass("navfixed")
  }else{
    navbar.removeClass("navfixed")
  }
  
})