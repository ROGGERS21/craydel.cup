
/*---------- NAVIGATION HAMBURGER ----------*/
 $(".navigation-hamburger").on("click", function() {
    $(this).toggleClass('-close');
    $('body').toggleClass('menu-open');

});

/*helps to bring mobile view on top and return to hidden place*/
if ($('.nav-scroller').length) {
    $(".sidemenu ul").hide();
    $(".has-children").click(function() {
        // e.preventDefault();
        // hide submenu
        var $this = $(this).find('ul');
        $(".sidemenu ul").not($this).slideUp(400);
        // toggle class & dd list
        $this.slideToggle(400);
        $(this).toggleClass("ddBtnActive");
    });
    
   
}

/*--------Register Option----------*/

$(document).ready(function() {
    $(".btn-about") .click(function(){
        $(".dropdown-option") .slideToggle("slow");

    });
});


/*--------user  circle----------*/

$(document).ready(function() {
    $(".icon-item") .click(function(){
        $(".theme-content") .slideToggle("slow");

    });
});














