// Полноэкранное меню

const hamburgerIcon = document.querySelector('.hamburger-menu-link');

hamburgerIcon.addEventListener ("click", function(e) {
    const hamburgerMenu = document.querySelector('.hamburger-menu');

    e.preventDefault;
    hamburgerMenu.style.display = 'block';
    hamburgerIcon.style.display = 'none';
    document.body.style.overflow = 'hidden';

    const hamburgerMenuItem = document.querySelectorAll('#nav__item');

    for (let i = 0; i < hamburgerMenuItem.length; i++) {
        hamburgerMenuItem[i].addEventListener ('click', function() {
            hamburgerMenu.style.display = '';
            hamburgerIcon.style.display = '';
            document.body.style.overflow = '';
        });
    };

    const hamburgerCloseIcon = document.querySelector('.close');

    hamburgerCloseIcon.addEventListener('click', function(){
        hamburgerMenu.style.display = '';
        hamburgerIcon.style.display = '';
        document.body.style.overflow = '';
    });

    const hamburgerLogo = document.querySelector('#logo__link');
    hamburgerLogo.addEventListener('click', function(){
        hamburgerMenu.style.display = '';
        hamburgerIcon.style.display = '';
        document.body.style.overflow = '';
    });

});
