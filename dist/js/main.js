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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLl9fZGRfX3NsaWRlX19ib3R0b21fX2Nhcm91c2VsX19pdGVtcycpLnNsaWNrKHtcclxuICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzIwJScsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZXRNb2NrdXBTaXplKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuX19kZF9fc2xpZGVfX2JvdHRvbV9fY2Fyb3VzZWxfX2l0ZW1zJykub24oJ3NldFBvc2l0aW9uJywgZnVuY3Rpb24oZXZlbnQsIHNsaWNrLCBkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgc2V0TW9ja3VwU2l6ZSgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgc2V0TW9ja3VwU2l6ZSgpXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0TW9ja3VwU2l6ZSgpIHtcclxuICAgICAgICAgICAgdmFyIG1wID0gJCgnLl9fZGRfX3NsaWRlX19ib3R0b21fX2Nhcm91c2VsJyk7XHJcbiAgICAgICAgICAgIHZhciBpbWdXaWR0aCA9ICQoJy5fX2RkX19zbGlkZV9fYm90dG9tX19jYXJvdXNlbF9faXRlbSBpbWcnKS5pbm5lcldpZHRoKCkgXHJcbiAgICAgICAgICAgIHZhciBpbWdIZWlnaHQgPSAkKCcuX19kZF9fc2xpZGVfX2JvdHRvbV9fY2Fyb3VzZWxfX2l0ZW0gaW1nJykuaW5uZXJIZWlnaHQoKSBcclxuICAgICAgICAgICAgdmFyIHN0eWxlID0gYDxzdHlsZSBpZD1cImNhcm91c2VsX3N0eWxlc1wiPlxyXG4gICAgICAgICAgICAgICAgLl9fZGRfX3NsaWRlX19ib3R0b21fX2Nhcm91c2VsOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoJHtpbWdXaWR0aH1weCArIDIwdncpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygke2ltZ0hlaWdodH1weCArIDEzdncpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEzNTBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5fX2RkX19zbGlkZV9fYm90dG9tX19jYXJvdXNlbDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoJHtpbWdIZWlnaHR9cHggKyAxMnZ3KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLl9fZGRfX3NsaWRlX19ib3R0b21fX2Nhcm91c2VsOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygke2ltZ0hlaWdodH1weCArIDE1dncpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5fX2RkX19zbGlkZV9fYm90dG9tX19jYXJvdXNlbDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoJHtpbWdIZWlnaHR9cHggKyAxNHZ3KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPmBcclxuICAgICAgICAgICAgJCgnI2Nhcm91c2VsX3N0eWxlcycpLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICQoc3R5bGUpLmFwcGVuZFRvKCBcImhlYWRcIiApXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiXX0=
