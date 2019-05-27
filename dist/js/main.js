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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLl9fZGRfX3NsaWRlX19ib3R0b21fX2Nhcm91c2VsX19pdGVtcycpLnNsaWNrKHtcclxuICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzIwJScsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNldE1vY2t1cFNpemUoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHNldE1vY2t1cFNpemUoKVxyXG4gICAgICAgIGZ1bmN0aW9uIHNldE1vY2t1cFNpemUoKSB7XHJcbiAgICAgICAgICAgIHZhciBtcCA9ICQoJy5fX2RkX19zbGlkZV9fYm90dG9tX19jYXJvdXNlbCcpO1xyXG4gICAgICAgICAgICB2YXIgaW1nV2lkdGggPSAkKCcuX19kZF9fc2xpZGVfX2JvdHRvbV9fY2Fyb3VzZWxfX2l0ZW0gaW1nJykuaW5uZXJXaWR0aCgpIFxyXG4gICAgICAgICAgICB2YXIgaW1nSGVpZ2h0ID0gJCgnLl9fZGRfX3NsaWRlX19ib3R0b21fX2Nhcm91c2VsX19pdGVtIGltZycpLmlubmVySGVpZ2h0KCkgXHJcbiAgICAgICAgICAgIHZhciBzdHlsZSA9IGA8c3R5bGU+XHJcbiAgICAgICAgICAgICAgICAuX19kZF9fc2xpZGVfX2JvdHRvbV9fY2Fyb3VzZWw6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygke2ltZ1dpZHRofXB4ICsgMjB2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKCR7aW1nSGVpZ2h0fXB4ICsgMTJ2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+YFxyXG4gICAgICAgICAgICAkKHN0eWxlKS5hcHBlbmRUbyggXCJoZWFkXCIgKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7Il19
