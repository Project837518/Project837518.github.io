
    (function($) {
    "use strict"; // Start of use strict
    
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
    
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
    
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
    
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
    
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
    
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
    
  })(jQuery); // End of use strict

 


  function enablei18n(setLang) {
   'use strict';
   var i18n = $.i18n();
   var lang = 'en';

   if(setLang == false){
     var sessionLang = sessionStorage.getItem('lang');
     if(typeof sessionLang == "undefined" || sessionLang == null || sessionLang == "null" || sessionLang == ""){
       var userLang = navigator.language || navigator.userLanguage; 
       if(typeof userLang == "undefined" || userLang == ""){
        userLang = 'en-EN';
      }
      if(userLang.indexOf('-')){
        lang = userLang.split('-')[0];
      }
    }
    else{
      lang = sessionLang;
    }
  }
  else{
    lang = setLang;
  }

  if(lang != 'en' && lang != 'de' && lang != 'fr' && lang != 'es' && lang != 'it' && lang != 'hi' && lang != 'id' && lang!='mr' && lang != 'tr' && lang!='kn' && lang != 'ru'){
    lang = 'en';
  }
  sessionStorage.setItem('dgc-lang', lang);
    
  i18n.locale = lang;
  
  i18n.load('assets/i18n', i18n.locale).done(
    function() {
     $('[data-i18n]').each(function(index) {
      $(this).i18n();
      $(this).html($.i18n($(this).attr('data-i18n')));
    } );
   } );
}
// Enable debug
$.i18n.debug = false;

$(document).ready(function(){

  enablei18n(false);
  initParticles();
  

  $(document).on("click", ".wallet-button", function(){
    $(".wallet-guide-detail").hide();
    $($(this).attr('data-target')).fadeIn();
  });
  $(document).on('click', '.select-lang', function(){
    enablei18n($(this).attr('data-lang'));
    $(".scroll-to-top a").trigger('click');
  });
});
