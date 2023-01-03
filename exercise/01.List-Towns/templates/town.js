import { html } from '../node_modules/lit-html/lit-html.js';


export const townsTemplate = (towns) => html`
    <ul>
        ${towns.map(town => html`${townTemplate(town)}`)}
    </ul>
`;

const townTemplate = (town) => html`
    <li>${town}</li>        
`;