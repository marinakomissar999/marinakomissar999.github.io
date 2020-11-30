$(function(){

    var $hamburger = $(".hamburger");
    $hamburger.on("click", function(e) {
      $hamburger.toggleClass("is-active");
      $( ".header_nav" ).slideToggle(0);
    });

    $(document).ready(function(){
      $('.works_cards').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        prevArrow: "<img src='img/prev.svg' class='prev' alt='1'>",
        nextArrow: "<img src='img/next.svg' class='next' alt='2'>",
    });

    $(document).ready(function(){
      $('.reviews_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        prevArrow: "<img src='img/prev.svg' class='prev' alt='1'>",
        nextArrow: "<img src='img/next.svg' class='next' alt='2'>"
      });
    });

    $('.works_tabs .tabs').on('mouseover', '.item', function(){
      if(!$(this).hasClass('--active')) {
        let parent = $(this).closest('.works_tabs');
        parent.find('.item.--active').removeClass('--active');
        $(this).addClass('--active');
        parent.find('.works_content .item[data-id="'+$(this).attr('data-id')+'"]').addClass('--active');
      } else return false
    });

    $('.portfolio_content .portfolio_tabs').on('click', '.portfolio_item', function(){
      if(!$(this).hasClass('--active')) {
        let parent = $(this).closest('.portfolio_content');
        parent.find('.portfolio_item.--active').removeClass('--active');
        $(this).addClass('--active');
        parent.find('.content .portfolio_item[data-id="'+$(this).attr('data-id')+'"]').addClass('--active');
      } else return false;
    });

    
		jQuery(document).ready(function(){
			jQuery(".info-scroll").niceScroll({
				cursorcolor:"#23355d",
				cursorwidth:"4px",
				cursoropacitymin: 1,
				cursorborder:'none',
				autohidemode:'leave',
				background: "#b0b0b4"
});

});

$('.blog_content-favorite').on('click', function(){
  $('.blog_content-favorite').toggleClass('blog_content-favorite--active');
});

jQuery('#arrow').click(function() {
  jQuery('html, body').animate({scrollTop: 0},1500);
    return false;
            
            });
          })
        });
