import {showActiveNotes} from './logic/filter';
import {tableContent} from './constants';
import {setNotes} from './logic/helper';
import {addNote} from './logic/processing';


if (!localStorage.getItem('all-notes')) {
  setNotes(tableContent);
}

try {
  showActiveNotes();
} catch (e) {
  console.log('Error occurred. Returning default values');
  setNotes(tableContent);
  showActiveNotes();
}

const addButton = document.querySelector('#add-button');
addButton.addEventListener('click', () => {
  addNote();
});
