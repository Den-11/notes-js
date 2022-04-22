import {showActiveNotes} from './switch';
import {tableContent} from './constants';

if (!localStorage.getItem('all-notes')) {
  localStorage.setItem('all-notes', JSON.stringify(tableContent));
}

showActiveNotes();

