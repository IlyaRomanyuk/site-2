jQuery(document).ready(function($) {
    $('[data-scrol]').on('click', function(event){
        event.preventDefault();
        let linkID = $(this).data('scrol');
        let blogID = $(linkID).offset().top.toFixed(0);
        console.log(blogID);
        $('html, body').animate({scrollTop: blogID}, 900, "swing");
    })
    
    $(window).on('scroll load', function(event){
        if($(this).scrollTop() > 765){
            $('.buttonTop').css("display", "block");
        }
        else{
            $('.buttonTop').css("display", "none");
        }

        if($(this).scrollTop() > 290){
            $('.services__item').addClass('services__animate');
        }else{
            $('.services__item').removeClass('services__animate');
        }

        if($(this).scrollTop() > 1200){
            $('.about__inner__text__first').addClass('text__animate');
            $('.about__inner__text__second').addClass('text__animate');
            $('.about__title').addClass('title__active');
            $('.about__text').addClass('title__active');
        } else{
            $('.about__inner__text__first').removeClass('text__animate');
            $('.about__inner__text__second').removeClass('text__animate');
            $('.about__title').removeClass('title__active');
            $('.about__text').removeClass('title__active');
        }

        if($(this).scrollTop() > 1807){
            $('.works__header').addClass('works__active');
            $('.card__first').addClass('works__item__active');
            $('.card__second').addClass('works__item__active');
            $('.card__third').addClass('works__item__active');
        } else{
            $('.works__header').removeClass('works__active');
            $('.card__first').removeClass('works__item__active');
            $('.card__second').removeClass('works__item__active');
            $('.card__third').removeClass('works__item__active');
        }

    })

    $('.buttonTop').on('click', function(event){
        $("html, body").animate({scrollTop: 0}, 700, "swing");
    })

    $('[data-target]').on('click', function(event){
        let thisPoint = $(this).data('target');
        $('.point').removeClass('point__active');
        $('.one').fadeOut(700);
        $(this).addClass('point__active');

        $(thisPoint).fadeIn(500);
    })

    $('.next__btn').on('click', function(event){
        event.preventDefault();  

        if($('.viewport').width() == 2220){
            $('.viewport').toggleClass('viewport__actialy')
        }else{
            $('.viewport').toggleClass('viewport__actialy');
        }

    })

    $('.prev__btn').on('click', function(event){
        event.preventDefault();
        if($('.viewport').width() == 2220){
            $('.viewport').toggleClass('viewport__actialy')
        }else{
            $('.viewport').toggleClass('viewport__actialy');
        }
    })
})