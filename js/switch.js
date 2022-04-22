import {renderTable} from './render';

const filterNotes = (archived) => {
  const localNotes = localStorage.getItem('all-notes');
  const parsedNotes = JSON.parse(localNotes);

  return parsedNotes.filter((item) => {
    return item.archived === archived;
  });
};

// show notes that archived: true
export const showArchivedNotes = () => {
  localStorage.setItem('showArchive', 'true');
  const notes = filterNotes('true');
  renderTable(notes);
};

// archived: false
export const showActiveNotes = () => {
  localStorage.setItem('showArchive', 'false');
  const notes = filterNotes('false');
  renderTable(notes);
};
