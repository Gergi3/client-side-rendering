import { html } from '../node_modules/lit-html/lit-html.js';

export const townsTemplate = (towns, match) => html`
    <ul>
        ${towns.map(town => html`${townTemplate(town, match)}`)}
    </ul>
`;

const townTemplate = (town, match) => html`
    <li class=${(match && town.toLowerCase().includes(match.toLowerCase())) ? 'active' : ''}>
        ${town}
    </li>
`;