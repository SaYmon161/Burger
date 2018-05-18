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

//Вертикальный аккордеон

const vAcco = document.querySelector('.team');
const vAccoItem = document.querySelectorAll('.v-accordeon__item');

vAcco.addEventListener('click', function(e){
    for (let i = 0; i < vAccoItem.length; i++) {
        vAccoItem[i].classList.remove('v-accordeon__item--active');
    }
});

for (let i = 0; i < vAccoItem.length; i++) {
    vAccoItem[i].addEventListener('click', function(e){
        e.stopPropagation();
        e.preventDefault();

        if (vAccoItem[i].classList.contains('v-accordeon__item--active')) {
            vAccoItem[i].classList.remove('v-accordeon__item--active');
            
        }
        else {
            for (let i = 0; i < vAccoItem.length; i++) {
                vAccoItem[i].classList.remove('v-accordeon__item--active');
            }
            vAccoItem[i].classList.add('v-accordeon__item--active');
        }
    })
}

//Feedback overlay

const feedbackItem = document.querySelectorAll('.feedback__item');

let template = document.createElement('div');

template.innerHTML = document.querySelector('#overlayTemplate').innerHTML;
const overlay = createOverlay(template);

for (let i = 0; i < feedbackItem.length; i++) {
    let openButton = feedbackItem[i].querySelector('.feedback__btn');
    let feedbackContent = feedbackItem[i].querySelector('.feedback__content');

    openButton.addEventListener('click', function(e) {
        e.preventDefault;
        overlay.open();
        overlay.setContent(feedbackContent);
    });
};

function createOverlay(template) {
    let fragment = template;

    const overlayElement = fragment.querySelector('.overlay');
    const overlayContent = fragment.querySelector('.overlay__content');
    const overlayClose = fragment.querySelector('.overlay__close');
    let overlayName = overlayContent.querySelector('.overlay__name');
    let overlayText = overlayContent.querySelector('.overlay__text');

    overlayElement.addEventListener('click', function(e) {
        if (e.target === overlayElement) {
            overlayClose.click();
        }
    });
    overlayClose.addEventListener('click', function() {
        document.body.removeChild(overlayElement);
    });

    return {
        open() {
            document.body.appendChild(overlayElement);
        },

        close() {
            overlayClose.click();
        },

        setContent(content) {
            overlayName.innerHTML = content.querySelector('.feedback__subtitle').innerHTML;
            overlayText.innerHTML = content.querySelector('.feedback__text').innerHTML;
            
        }
    };
};