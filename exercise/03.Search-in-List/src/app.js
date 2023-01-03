import { render } from '../node_modules/lit-html/lit-html.js';
import { towns } from './towns.js'
import { searchTemplate } from '../templates/search.js';
import { townsTemplate } from '../templates/towns.js';

const body = document.querySelector('body');
render(searchTemplate(towns, null, onSearch), body)

const input = document.getElementById('searchText');
const townsResult = document.getElementById('towns');

function onSearch(e) {
   e.preventDefault();
   let match = input.value;
   console.log(match);
   if (match === '') {
      match = null;
   } 

   render(searchTemplate(towns, match), townsResult);
}