(function($) {
    "use strict"
    $(function() {
        $('.__dd__slide__bottom__carousel__items').slick({
            centerMode: true,
            centerPadding: '20%',
            slidesToShow: 1,
            arrows: false
        })

        $(window).resize(function() {
            setMockupSize()
        })

        setMockupSize()
        function setMockupSize() {
            var mp = $('.__dd__slide__bottom__carousel');
            var imgWidth = $('.__dd__slide__bottom__carousel__item img').innerWidth() 
            var imgHeight = $('.__dd__slide__bottom__carousel__item img').innerHeight() 
            var style = `<style>
                .__dd__slide__bottom__carousel::after {
                    width: calc(${imgWidth}px + 20vw);
                    height: calc(${imgHeight}px + 12vw);
                    top: -20px;
                }
                </style>`
            $(style).appendTo( "head" )
        }
    })
})(jQuery);