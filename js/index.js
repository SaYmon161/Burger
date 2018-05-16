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

//Горизонтальный аккордеон

const hAcco = document.querySelector('.menu');
const hAccoItem = document.querySelectorAll('.h-accordeon__item');

hAcco.addEventListener('click', function(e){
    for (let i = 0; i < hAccoItem.length; i++) {
        hAccoItem[i].classList.remove('h-accordeon__item--active');
    }
});

for (let i = 0; i < hAccoItem.length; i++) {
    hAccoItem[i].addEventListener('click', function(e){
        e.stopPropagation();
        e.preventDefault();

        if (hAccoItem[i].classList.contains('h-accordeon__item--active')) {
            hAccoItem[i].classList.remove('h-accordeon__item--active');
            
        }
        else {
            for (let i = 0; i < hAccoItem.length; i++) {
                hAccoItem[i].classList.remove('h-accordeon__item--active');
            }
            hAccoItem[i].classList.add('h-accordeon__item--active');
        }
    })
}