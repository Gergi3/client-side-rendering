import { html } from '../node_modules/lit-html/lit-html.js';

export const catsTemplate = (cats) => html`
    <ul>
        ${cats.map(cat => html`${catTemplate(cat)}`)}
    </ul>
`;

const catTemplate = (cat) => html`
    <li>
        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn" data-cat-id=${cat.id}>Show status code</button>
            <div class="status" style="display: none" id=${cat.id}>
                <h4>Status Code: ${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div>
    </li>
`;

// id, statusCode, statusMessage, imageLocation