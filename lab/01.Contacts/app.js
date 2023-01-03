import { contacts } from './contacts.js';
import { render } from './node_modules/lit-html/lit-html.js';
import { contactsTemplate } from './templates/contact.js';

const contactsDiv = document.getElementById('contacts');

render(contactsTemplate(contacts), contactsDiv);