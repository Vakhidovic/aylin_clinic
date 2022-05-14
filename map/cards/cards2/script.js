var bg = document.querySelector(".item-bg");
var items = document.querySelectorAll(".news__item");
var item = document.querySelector(".news__item");

function cLog(content) {
    console.log(content);
}

if (document.querySelector(window).width() > 800) {
    document.querySelector(document).addEventListener("mouseover", ".news__item", function (_event, _element) {
        var newsItem = document.querySelectorAll(".news__item");
        newsItem.forEach(function (element, index) {
            element.addEventListener("mouseover", function () {
                var x = this.getBoundingClientRect().left;
                var y = this.getBoundingClientRect().top;
                var width = this.getBoundingClientRect().width;
                var height = this.getBoundingClientRect().height;

                document.querySelector(".item-bg").classList.add("active");
                document.querySelector(".news__item").removeClass("active");
                // document.querySelector('.news__item').removeClass('active');

                bg.style.width = width + "px";
                bg.style.height = height + "px";
                bg.style.transform = "translateX(" + x + "px ) translateY(" + y + "px)";
            });

            element.addEventListener("mouseleave", function () {
                document.querySelector(".item-bg").removeClass("active");
                document.querySelector(".news__item").removeClass("active");
            });
        });
    });
}

var swiper = new Swiper(".news-slider", {
    effect: "coverflow",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    keyboard: true,
    spaceBetween: 0,
    slidesPerView: "auto",
    speed: 300,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 3,
        slideShadows: false
    },
    breakpoints: {
        480: {
            spaceBetween: 0,
            centeredSlides: true
        }
    },
    simulateTouch: true,
    navigation: {
        nextEl: ".news-slider-next",
        prevEl: ".news-slider-prev"
    },
    pagination: {
        el: ".news-slider__pagination",
        clickable: true
    },
    on: {
        init: function () {
            var activeItem = document.querySelector(".swiper-slide-active");

            var sliderItem = activeItem.querySelector(".news__item");

            document.querySelector(".swiper-slide-active .news__item").classList.add("active");

            var x = sliderItem.getBoundingClientRect().left;
            var y = sliderItem.getBoundingClientRect().top;
            var width = sliderItem.getBoundingClientRect().width;
            var height = sliderItem.getBoundingClientRect().height;

            document.querySelector(".item-bg").classList.add("active");

            bg.style.width = width + "px";
            bg.style.height = height + "px";
            bg.style.transform = "translateX(" + x + "px ) translateY(" + y + "px)";
        }
    }
});

swiper.addEventListener("touchEnd", function () {
    document.querySelector(".news__item").removeClass("active");
    document.querySelector(".swiper-slide-active .news__item").classList.add("active");
});

swiper.addEventListener("slideChange", function () {
    document.querySelector(".news__item").removeClass("active");
});

swiper.addEventListener("slideChangeTransitionEnd", function () {
    document.querySelector(".news__item").removeClass("active");
    var activeItem = document.querySelector(".swiper-slide-active");

    var sliderItem = activeItem.querySelector(".news__item");

    document.querySelector(".swiper-slide-active .news__item").classList.add("active");

    var x = sliderItem.getBoundingClientRect().left;
    var y = sliderItem.getBoundingClientRect().top;
    var width = sliderItem.getBoundingClientRect().width;
    var height = sliderItem.getBoundingClientRect().height;

    document.querySelector(".item-bg").classList.add("active");

    bg.style.width = width + "px";
    bg.style.height = height + "px";
    bg.style.transform = "translateX(" + x + "px ) translateY(" + y + "px)";
});
