'use strict';
// landing-header
window.onload = function () {
    window.addEventListener('scroll', function () {
        if (pageYOffset > 100) {
            document.getElementById('landing-header').classList.add('main-menu-bg-show');
        } else {
            document.getElementById('landing-header').classList.remove('main-menu-bg-show');
        }
    });
}

function ShowHideMobileMenu(){
    document.getElementById('main-menu').classList.toggle('show-mobile-menu');
    document.getElementById('dad-mobile-btn').classList.toggle('mobile-btn-view-2');
}

