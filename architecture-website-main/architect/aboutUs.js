//const element = document.querySelector("#bannertext");
//function scroll (){
//    switch("scroll 0-50") {
  //      case x:
  //       element.style.display= "none"
  //        break;
  //  default:
        
//}}    

const element = document.querySelector("#bannertext");
function EasyPeasyParallax() {
    scrollPos = $(this).scrollTop();
    $('#banner').css({
        'background-position': '50% ' + (-scrollPos / 4) + "px"
    });     
    $('#bannertext').css({
        'margin-top': (scrollPos / 4) + "px",   
        'opacity':  (($(window).height() * 0.15) / scrollPos)
    });

    if(scrollPos > ($(window).height() * 0.400)){
        element.style.filter= "blur(3px)";
    }
    else{
        element.style.filter= "blur(0px)";
    }
    
    if(scrollPos > ($(window).height() * 0.50)){
        element.style.display= "none"
    }
    else{
        element.style.display= "block"
    }
}
$(document).ready(function () {
    $(window).scroll(function () {
        EasyPeasyParallax();
    });
});
// Z