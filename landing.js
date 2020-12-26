const projectAnimate = {
    delay: 400,
    distance: '200px',
    origin: 'bottom',
    easing: 'cubic-bezier(.17,.42,.84,.78)',
    opacity: 0,
    afterReveal: function(el) {
        ScrollReveal().clean(el);

    }
};
const itemList = [
    document.querySelector('.project_container'),
    document.querySelector('form'),
    document.querySelector('.aboutHeader'),
    document.querySelector('.about-technologies'),
    document.querySelector('.about-paragraph'),
    document.querySelector('#skills')
];
const social_media = document.querySelector('.social-media');
const menuLinks = document.querySelectorAll('.menuLink');
const menu_mobile = document.querySelector('.menu-mobile');
const button = document.querySelector('.menu-btn');
const logoHeaderImage = document.querySelector('.logoHeaderImage');
ScrollReveal.debug = true;

ScrollReveal().reveal(itemList, projectAnimate);
ScrollReveal().reveal('h1', { delay: 500, distance: '100px', origin: 'top', easing: 'ease-out' });
ScrollReveal().reveal(social_media, { delay: 500, distance: '100px', origin: 'top', easing: 'ease-out' });
ScrollReveal().reveal(logoHeaderImage, { delay: 1000, distane: '100px', origin: 'left', easing: 'ease-out' });

// hamburger menu *******************
button.addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('menu-mobile');
});

const icons = document.querySelectorAll('.icon');
icons.forEach(icon => {
    icon.addEventListener('click', (event) => {
        icon.classList.toggle("open");
    });
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log('click');
        document.querySelector('.menu').classList.remove('menu-mobile');
        document.querySelector('.icon').classList.remove('open');

    })
});

// *****scroll indicator *****
function indicateScroll() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector('.progress-bar').style.width = scrolled + "%";
}
document.addEventListener('scroll', indicateScroll);