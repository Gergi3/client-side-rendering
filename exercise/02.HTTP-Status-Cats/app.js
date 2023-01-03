import { render } from './node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';
import { catsTemplate } from './templates/cat.js';


let result = document.getElementById('allCats');

result.addEventListener('click', onClick);

function onClick(e) {
    e.preventDefault();
    if (e.target.tagName === 'BUTTON') {
        let button = e.target;
        let buttonList = [...e.target.classList];
        let cat = button.nextSibling.nextSibling;

        if (buttonList.includes('showBtn')) {
            cat.style.display = 'block';
            button.classList.remove('showBtn');
            button.classList.add('hideBtn');
            button.textContent = 'Hide status code';
        } else if (buttonList.includes('hideBtn')) {
            cat.style.display = 'none';
            button.classList.add('showBtn');
            button.classList.remove('hideBtn');
            button.textContent = 'Show status code';
        }
    }
}

render(catsTemplate(cats), result);