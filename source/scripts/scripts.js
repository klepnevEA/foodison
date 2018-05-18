

$(document).ready(function() {
    // слайдер
    $('.slider__list').slick({
    	dots: true,
    	arrows: false
    });

    $('.menu__list').slick({
    	dots: false,
    	arrows: false,
    	slidesToShow: 5,
  		slidesToScroll: 5,
  		responsive: [
	    {
	      breakpoint: 768,
	      settings: {
		    slidesToShow: 4,
		    slidesToScroll: 4
		  }
	    },
	    {
	      breakpoint: 480,
	      settings: {
		    slidesToShow: 3,
		    slidesToScroll: 3,
		  }
		}]
    });

    /*попап*/

    function openPopup() {
    	$('.popup').addClass('active');
    };

    function closePopup() {
    	$('.popup').removeClass('active');
    };

    $('.header__menu-btn').on('touckend mouseup', openPopup);
    $('.popup__close').on('touckend mouseup', closePopup);


    /*выбор блюда*/

    function dishesActive(e) {
        e.preventDefault();
        $(this).closest('.dishes__buttons').find('.dishes__buttons-col').removeClass('dishes__buttons-col_active');
        $(this).addClass('dishes__buttons-col_active');
    }
    $('.dishes__buttons-col').on('touckend mouseup', dishesActive);



    function ordersActive(e) {
        e.preventDefault();
        if($(this).hasClass('my-orders__block_active')) {
            $(this).addClass('my-orders__block_menu')
        } else {
            $(this).addClass('my-orders__block_active');
        }
        

    }
    $('.my-orders__block').on('touckend mouseup', ordersActive);

    $('.select_main').on('touckend mouseup', function () {
        $(this).toggleClass('active');
    });


    /*открытие блока в курьерах*/


    $('.courier-my-orders-open').on('touckend mouseup', function (e) {
        e.preventDefault();
        var thisTarget = e.target,
            thisParent = thisTarget.closest('.courier-my-orders'),
            thisDrop = $(thisParent).find('.courier-my-orders__drop');
            thisDrop.toggleClass('active')
    });

    $('.btn-canceled').on('touckend mouseup', function (e) {
        e.preventDefault();
        $('.courier-my-orders__popup_canceled').toggleClass('active');
    });

    $('.btn-fulfilled').on('touckend mouseup', function (e) {
        e.preventDefault();
        $('.courier-my-orders__popup_fulfilled').toggleClass('active');
    });

    $('.courier-my-orders__head-btn-add').on('touckend mouseup', function (e) {
        e.preventDefault();
        $('.courier-my-orders__popup_add').toggleClass('active');
    });

    $('.courier-my-orders__popup-close, .courier-my-orders__popup-yes').on('touckend mouseup', function (e) {
        e.preventDefault();
        $(this).closest('.courier-my-orders__popup').removeClass('active')
    });









});