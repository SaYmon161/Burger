// var screenWidth = document.documentElement.clientWidth;

// Полноэкранное меню

const hamburgerIcon = document.querySelector('.hamburger-menu-link');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerMenuItem = document.querySelectorAll('#nav__item');
const hamburgerCloseIcon = document.querySelector('.close');
const hamburgerLogo = document.querySelector('#logo__link');

hamburgerIcon.addEventListener ("click", function(e) {
    e.preventDefault();
    hamburgerMenu.style.display = 'block';
    hamburgerIcon.style.display = 'none';
    document.body.style.overflow = 'hidden'; 
});

for (let i = 0; i < hamburgerMenuItem.length; i++) {
    hamburgerMenuItem[i].addEventListener ('click', function() {
        hamburgerMenu.style.display = '';
        hamburgerIcon.style.display = '';
        document.body.style.overflow = '';
    });
};

hamburgerCloseIcon.addEventListener('click', function() {
    hamburgerMenu.style.display = '';
    hamburgerIcon.style.display = '';
    document.body.style.overflow = '';
});

hamburgerLogo.addEventListener('click', function() {
    hamburgerMenu.style.display = '';
    hamburgerIcon.style.display = '';
    document.body.style.overflow = '';
});

//Горизонтальный аккордеон

const hAcco = document.querySelector('.menu');
const hAccoItem = document.querySelectorAll('.h-accordeon__item');
const trigger = document.querySelector('.h-accordeon__trigger')
const triggerWidth = parseInt(getComputedStyle(trigger).width);
const hAccoContent = document.querySelectorAll('.h-accordeon__content')

function adaptHAccoContent (n, opened) {
    let screenWidth = document.documentElement.clientWidth;
    
    if (screenWidth <= 768 && screenWidth > 480) {
        if (!opened) {
            hAccoContent[n].style.width = screenWidth - triggerWidth * hAccoItem.length + 'px';
        } else {
            hAccoContent[n].style.width = '';
        };
    } else if (screenWidth <= 480) {
        if (!opened) {
            hAccoContent[n].style.width = screenWidth - triggerWidth + 'px';
        } else {
            hAccoContent[n].style.width = '';
        };
    };
};

hAcco.addEventListener('click', function(e){
    for (let i = 0; i < hAccoItem.length; i++) {
        hAccoItem[i].classList.remove('h-accordeon__item--active');
        adaptHAccoContent(i, true);
    }
});

for (let i = 0; i < hAccoItem.length; i++) {
    hAccoItem[i].addEventListener('click', function(e){
        e.stopPropagation();
        e.preventDefault();

        if (hAccoItem[i].classList.contains('h-accordeon__item--active')) {
            hAccoItem[i].classList.remove('h-accordeon__item--active');
            adaptHAccoContent(i, true);
        }
        else {
            for (let i = 0; i < hAccoItem.length; i++) {
                hAccoItem[i].classList.remove('h-accordeon__item--active');
                adaptHAccoContent(i, true);
            }
            hAccoItem[i].classList.add('h-accordeon__item--active');
            adaptHAccoContent(i, false);
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
        e.preventDefault();
        overlay.open();
        overlay.setContent(feedbackContent);
        document.body.style.overflow = 'hidden';
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
        document.body.style.overflow = '';
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

//Слайдер

const left = document.querySelector('.arrow-left');
const right = document.querySelector('.arrow-right');
const sliderList = document.querySelector('.slider__list');
const sliderItemsArray = document.querySelectorAll('.slider__item');
const slider = document.querySelector('.slider');

slider.style.width = sliderItemsArray.length*100 + '%'; //Динамическое изменение ширины слайдера в зависимости от количества li

const step = 100 / sliderItemsArray.length;
const minRight = 0;
const maxRight = step * (sliderItemsArray.length - 1);
let currentRight = 0;

sliderList.style.right = currentRight;

left.addEventListener('click', e => {
    e.preventDefault();
    if (currentRight > minRight) {
        currentRight -= step;
        sliderList.style.right = currentRight + '%';
    };
});

right.addEventListener('click', e => {
    e.preventDefault();
    if (currentRight < maxRight) {
        currentRight += step;
        sliderList.style.right = currentRight + '%';
    }
})

//Ховер "Состав"
const dropdown = document.querySelector('.ingredients__dropdown')
const closeDropdown = document.querySelector('.close-dropdown');
const ingredientsPicWrap = document.querySelector('.ingredients__pic-wrap')
let screenWidth = document.documentElement.clientWidth;

if (screenWidth <= 768) {
    dropdown.style.width = screenWidth * 0.42 + 'px';
}

ingredientsPicWrap.addEventListener('click', () => {
    dropdown.style.opacity = '1';
    dropdown.style.zIndex = '10';
    ingredientsPicWrap.style.backgroundColor = '#e35028';
})

closeDropdown.addEventListener('click', () => {
    dropdown.style.opacity = '';
    dropdown.style.zIndex = '';
    ingredientsPicWrap.style.backgroundColor = '';
})


//One Page Scroll
const mainContent = document.querySelector('.main-content');
const sectionArray = document.querySelectorAll('section');
const forward = document.querySelector('.forward-arrow');

const scrollStep = 100;
const minTop = 0;
const maxTop = - scrollStep * (sectionArray.length - 1);
let currentTop = 0;

mainContent.style.top = currentTop + '%';

function scrollDown() {
    if (currentTop > maxTop) {
        currentTop -= scrollStep;
        mainContent.style.top = currentTop + '%';
        console.log(currentTop);
    }
}

function scrollUp() {
    if (currentTop < minTop) {
        currentTop += scrollStep;
        mainContent.style.top = currentTop + '%';
        console.log(currentTop);
    }
}

forward.addEventListener('click', () => {
    scrollDown();
})

document.addEventListener('keyup', e => {
    if (e.keyCode === 40) { //стрелка вниз
        scrollDown();
    } else if (e.keyCode === 38) {  //стрелка вверх
        scrollUp();
    } else if (e.keyCode === 33) { //Page Up
        scrollUp();
    } else if (e.keyCode === 34) { //Page Down
        scrollDown();        
    }
})

document.addEventListener('wheel', (e) => {
    if (e.wheelDelta > 0) {
        scrollUp();
    } else if (e.wheelDelta < 0) {
        scrollDown();
    }
})
