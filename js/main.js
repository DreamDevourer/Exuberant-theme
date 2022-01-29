jQuery(document).ready(function($) {

   $('.mainmenu').addClass('js-enabled');
    $('.mainmenu .hs-menu-flow-horizontal').before('<a class="mobile-trigger"><i></i></a>');
    $('.mainmenu .hs-item-has-children > a').after('<span class="child-triggerm"><span></span></span>');
    $('a.mobile-trigger').click(function() {
        $(this).next('.mainmenu .hs-menu-flow-horizontal').slideToggle(250);
        $('body').toggleClass('mobile-open');
        $('span.child-triggerm').removeClass('child-open');
        $('.hs-menu-children-wrapper').slideUp(250);
        return false;
     });

    $('.mainmenu span.child-triggerm').click(function() {
        $(this).parent().siblings('.hs-item-has-children').find('span.child-triggerm').removeClass('child-open');
        $(this).parent().siblings('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
        $(this).next('.hs-menu-children-wrapper').slideToggle(250);
        $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
        $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('span.child-triggerm').removeClass('child-open');
        $(this).toggleClass('child-open');
        return false;
    });

  $(window).scroll(function() {
        var fixedtop = $('.header');
        if ($(this).scrollTop() > 60) {
			fixedtop.addClass('fixed');
		} else { 
			fixedtop.removeClass('fixed');
		}
       

      
      if ($(this).scrollTop() > 200){  
        $('.secondry-menu').addClass("sticky-two");
      }
      else{
        $('.secondry-menu').removeClass("sticky-two");
      }
      
      
      
      
      if ($(this).scrollTop() > 250){  
        $('body').addClass("progress-indicator");
      }
      else{
        $('body').removeClass("progress-indicator");
      }
      
      
	});
  
  
$('.downarrow a').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {
    
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top 
                }, 1000);
                return false;
            }
        }
    });
  
  
    $('.resources-mainrow-body > span .hs_cos_wrapper').each(function(i,val){
       $(this).find('.resources-main-section').attr('id', 'tab'+i);
      
    }); 
  
    $('.row-fluid .secondry-menu.second ul li a').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {
    
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top - $(".header").outerHeight() - $(".secondry-menu").outerHeight() - 10
                }, 1000);
                return false;
            }
        }
    });
    
  $( ".blog-subscrib-row" ).insertAfter( ".listing-row2 .post-item:nth-child(2)" );
  $( ".popular-post-row" ).insertAfter( ".listing-row2 .post-item:nth-child(3)" );

});