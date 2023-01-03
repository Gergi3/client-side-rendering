import * as api from './api.js';
import { render, html } from './node_modules/lit-html/lit-html.js';

const dropdownTemplate = (options) => html`
    <h1>Dropdown Menu</h1>
    <article>
        <div>
            <select id="menu">
                ${options.map(opt => html`<option value=${opt._id}>${opt.text}</option>`)}
            </select>
        </div>
        <form @submit=${onSubmit}>
            <label for="itemText">
                Text:
            </label>
            <input type="text" id="itemText" name="text" />
            <input type="submit" value="Add">
        </form>
    </article>
`;

// onload
const main = document.getElementById('main');
update(await api.getOptions());

async function onSubmit(e) {
    e.preventDefault();
    let form = e.currentTarget;
    let formData = new FormData(form);
    
    const optionText = formData.get('text');

    await api.postOption(optionText);
    update(await api.getOptions());
    form.reset();
}

async function update(options) {
    render(dropdownTemplate(options), main);
}