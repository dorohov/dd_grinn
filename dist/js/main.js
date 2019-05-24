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
            console.log('adsd')
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcuX19kZF9fc2xpZGVfX2JvdHRvbV9fY2Fyb3VzZWxfX2l0ZW1zJykuc2xpY2soe1xyXG4gICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMjAlJyxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2V0TW9ja3VwU2l6ZSgpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZHNkJylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBzZXRNb2NrdXBTaXplKClcclxuICAgICAgICBmdW5jdGlvbiBzZXRNb2NrdXBTaXplKCkge1xyXG4gICAgICAgICAgICB2YXIgbXAgPSAkKCcuX19kZF9fc2xpZGVfX2JvdHRvbV9fY2Fyb3VzZWwnKTtcclxuICAgICAgICAgICAgdmFyIGltZ1dpZHRoID0gJCgnLl9fZGRfX3NsaWRlX19ib3R0b21fX2Nhcm91c2VsX19pdGVtIGltZycpLmlubmVyV2lkdGgoKSBcclxuICAgICAgICAgICAgdmFyIGltZ0hlaWdodCA9ICQoJy5fX2RkX19zbGlkZV9fYm90dG9tX19jYXJvdXNlbF9faXRlbSBpbWcnKS5pbm5lckhlaWdodCgpIFxyXG4gICAgICAgICAgICB2YXIgc3R5bGUgPSBgPHN0eWxlPlxyXG4gICAgICAgICAgICAgICAgLl9fZGRfX3NsaWRlX19ib3R0b21fX2Nhcm91c2VsOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoJHtpbWdXaWR0aH1weCArIDIwdncpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygke2ltZ0hlaWdodH1weCArIDEydncpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPmBcclxuICAgICAgICAgICAgJChzdHlsZSkuYXBwZW5kVG8oIFwiaGVhZFwiIClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyJdfQ==
