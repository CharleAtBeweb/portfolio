function myFunction() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
window.resize = function()
{

var head = document.getElementById('header');
head.style.width = '50%';


}


// SECTION EXPERIENCE
$(function () {

  var prog = $(".progress-bar");

prog.eq(0).animate({width:"70%"}, 1500)

prog.eq(1).animate({width:"40%"}, 1500)

prog.eq(2).animate({width:"85%"}, 1500)

});
