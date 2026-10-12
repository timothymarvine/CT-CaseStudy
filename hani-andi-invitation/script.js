$(document).ready(function () {

    // OPEN INVITATION

    $("body").addClass("cover-active");

    $("#openInvitation").on("click", function () {

        $("#invitationCover").addClass("hide");

        $("body")
            .removeClass("cover-active")
            .addClass("invitation-opened");

        const music = document.getElementById("bgMusic");

        music.volume = 0.5;

        music.play().catch(function(error) {
            console.log("Music autoplay blocked:", error);
        });

        setTimeout(function () {

            window.scrollTo({
                top: document.getElementById("home").offsetTop,
                behavior: "smooth"
            });

            // MULAI ANIMASI HERO
            $("body").addClass("hero-opened");

            AOS.refresh();

        }, 500);

    });

    // AOS
    AOS.init({
        duration: 900,
        once: true
    });


    // COUNTDOWN
    const weddingDate = new Date("October 15, 2026 13:30:00").getTime();

    const countdown = setInterval(function () {

        const now = new Date().getTime();
        const distance = weddingDate - now;

        const days = Math.floor(
            distance / (1000 * 60 * 60 * 24)
        );

        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        );

        const seconds = Math.floor(
            (distance % (1000 * 60)) /
            1000
        );

        $("#days").text(days);
        $("#hours").text(hours.toString().padStart(2, "0"));
        $("#minutes").text(minutes.toString().padStart(2, "0"));
        $("#seconds").text(seconds.toString().padStart(2, "0"));

        if (distance < 0) {
            clearInterval(countdown);

            $("#days").text("00");
            $("#hours").text("00");
            $("#minutes").text("00");
            $("#seconds").text("00");
        }

    }, 1000);


    // FANCYBOX
    $('[data-fancybox="wedding-gallery"]').fancybox({
        loop: true,
        buttons: [
            "zoom",
            "slideShow",
            "fullScreen",
            "close"
        ]
    });


    // SWIPER
    const weddingSwiper = new Swiper(".weddingSwiper", {

        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 0,

        loop: true,

        speed: 1000,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },

        navigation: {
            nextEl: ".weddingSwiper .swiper-button-next",
            prevEl: ".weddingSwiper .swiper-button-prev"
        }

    });

});