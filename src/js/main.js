(function($) {
    "use strict"
    $(function() {
        $('.__dd__slide__bottom__carousel__items').slick({
            centerMode: true,
            centerPadding: '20%',
            slidesToShow: 1,
            arrows: false,
            dots: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                    }
                }
            ]
        })

        $(window).resize(function() {
            setMockupSize()
        })

        $('.__dd__slide__bottom__carousel__items').on('setPosition', function(event, slick, direction) {
            setMockupSize()
        })

        setMockupSize()
        function setMockupSize() {
            var mp = $('.__dd__slide__bottom__carousel');
            var imgWidth = $('.__dd__slide__bottom__carousel__item img').innerWidth() 
            var imgHeight = $('.__dd__slide__bottom__carousel__item img').innerHeight() 
            var style = `<style id="carousel_styles">
                .__dd__slide__bottom__carousel::after {
                    width: calc(${imgWidth}px + 20vw);
                    height: calc(${imgHeight}px + 13vw);
                }
                @media (max-width: 1350px) {
                    .__dd__slide__bottom__carousel::after {
                        height: calc(${imgHeight}px + 12vw);
                    }
                }
                @media (max-width: 1200px) {
                    .__dd__slide__bottom__carousel::after {
                        height: calc(${imgHeight}px + 15vw);
                    }
                }
                @media (max-width: 500px) {
                    .__dd__slide__bottom__carousel::after {
                        height: calc(${imgHeight}px + 14vw);
                    }
                }
                </style>`
            $('#carousel_styles').remove()
            $(style).appendTo( "head" )
        }
    })
})(jQuery);