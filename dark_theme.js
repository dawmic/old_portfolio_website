const bulbBtn = document.querySelector('.bulb-btn');
let darkTheme = false;







const theme = () => {
    //elements to change bakcground color
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    const portfolio = document.querySelector('#portfolio')
    const contact = document.querySelector('#contact');
    const domElements = [body, header, contact];

    // elements to change font color
    const h2 = document.querySelectorAll('h2');
    const h3 = document.querySelectorAll('h3');
    const paragraphs = document.querySelectorAll('p');
    const projectLink = document.querySelectorAll('.project-link');
    const fontElements = [h2, h3, paragraphs, projectLink];





    darkTheme = !darkTheme;




    if (darkTheme) {
        // switch colors all paragraphs and backgrounds

        bulbBtn.src = 'images/lightbulb.png';
        domElements.forEach(el => {
            el.classList.add('dark-theme');
        });
        //dark fonts loop
        fontElements.forEach(el => {
            el.forEach(elem => {
                elem.classList.add('dark-font');

            });

        });
    } else {
        // return to day mode all elements

        bulbBtn.src = 'images/lightbulb-on.png';
        domElements.forEach(el => {
            el.classList.remove('dark-theme');
        });
        // remove dark fonts loop
        fontElements.forEach(el => {
            el.forEach(elem => {
                elem.classList.remove('dark-font');
            });
        });
    }
};



bulbBtn.addEventListener('click', theme);