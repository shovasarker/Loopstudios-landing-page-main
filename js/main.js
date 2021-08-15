
const body = document.querySelector('body');
const menuBtn = document.querySelectorAll('.menu-btn');
const navbar = document.querySelector('#navbar');
const mobileLink = document.querySelectorAll('.mobile-menu-link');

menuBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        if (body.classList.contains("open")) {
            body.classList.remove("open");
        } else {
            body.classList.add("open");
        }
        if (navbar.classList.contains("open")) {
            navbar.classList.remove("open");
        } else {
            navbar.classList.add("open");
        }
    });
});

mobileLink.forEach(link => {

    link.addEventListener('click', () => {
        if (navbar.classList.contains("open")) {
            navbar.classList.remove("open");
        }
        if (body.classList.contains("open")) {
            body.classList.remove("open");
        }
    });

});

