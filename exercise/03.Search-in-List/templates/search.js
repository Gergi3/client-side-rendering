import { html } from '../node_modules/lit-html/lit-html.js';
import { townsTemplate } from './towns.js';

export const searchTemplate = (towns, match, onSearch) => html`
    <article>
        <div id="towns">
            <ul>
                ${townsTemplate(towns, match)}
            </ul>
        </div>
        <input type="text" id="searchText" />
        <button @click=${onSearch}>Search</button>
        <div id="result"></div>
    </article>
`;