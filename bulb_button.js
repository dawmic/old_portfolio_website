const bulbBtn = document.querySelector('.bulb-btn');
let darkTheme = false;


const themeClass = ['dark-theme', 'dark-font'];




const theme = () => {

    const body = document.querySelector('body');
    const header = document.querySelector('header');
    const portfolio = document.querySelector('#portfolio')
    const contact = document.querySelector('#contact');
    const domElements = [body, header, contact];
    const h2 = document.querySelectorAll('h2');
    const h3 = document.querySelectorAll('h3');
    const input = document.querySelectorAll('input');
    const textarea = document.querySelector('textarea');
    const fonts = []


    const paragraphs = document.querySelectorAll('p');

    darkTheme = !darkTheme;




    if (darkTheme) {
        // switch colors all paragraphs and backgrounds
        paragraphs.forEach(el => el.classList.add('dark-font'));
        bulbBtn.src = 'images/lightbulb.png';
        domElements.forEach(el => {
            el.classList.add(...themeClass);
        });
    } else {
        // return to day mode all elements
        paragraphs.forEach(el => el.classList.remove('dark-font'));
        bulbBtn.src = 'images/lightbulb-on.png';
        domElements.forEach(el => {
            el.classList.remove(...themeClass);

        });

    }
}
bulbBtn.addEventListener('click', theme);