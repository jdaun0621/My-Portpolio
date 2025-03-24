document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".swiper", {
        direction: "vertical", 
        loop: false,
        speed: 800,
        mousewheel: true, 
        keyboard: {
            enabled: true, 
            onlyInViewport: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true, 
            renderBullet: function (index, className) {
                return `<span class="${className}"></span>`; 
            }
        },
        on: {
            slideChange: function () {
                const footer = document.querySelector("footer");
                if (swiper.activeIndex === 3) { 
                    footer.style.display = "block";
                } else {
                    footer.style.display = "none";
                }
            }
        }
    });

    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const slideIndex = link.getAttribute("data-slide");
            swiper.slideTo(slideIndex);
        });
    });
});
