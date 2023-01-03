import { render } from './node_modules/lit-html/lit-html.js';
import { townsTemplate } from './templates/town.js';


const townsForm = document.querySelector('form');
const result = document.getElementById('root');

townsForm.addEventListener('submit', onLoadBtnClick);

function onLoadBtnClick(e) {
    e.preventDefault();
    let form = e.currentTarget;
    let formData = new FormData(form);
    let towns = formData.get('towns').split(', ');

    render(townsTemplate(towns), result);
    form.reset();
}