document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".swiper", {
        direction: "vertical", // 세로 스와이프
        loop: false,
        speed: 800,
        mousewheel: true, // 마우스 스크롤 가능
        keyboard: {
            enabled: true, // 키보드 화살표 이동 가능
            onlyInViewport: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true, // 점 클릭 시 이동
            renderBullet: function (index, className) {
                return `<span class="${className}"></span>`; // 숫자 제거
            }
        },
        on: {
            slideChange: function () {
                const footer = document.querySelector("footer");
                if (swiper.activeIndex === 3) { // PROJECT 페이지 (data-slide="3")일 때만 보이기
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
