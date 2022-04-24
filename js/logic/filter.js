import {renderTable, renderHeader} from '../rendering/render';
import {getArchiveVariable, getParsedNotes, setArchiveVariable} from './helper';

const filterNotes = (archived) => {
  const parsedNotes = getParsedNotes();

  return parsedNotes.filter((item) => {
    return item.archived === archived;
  });
};

export const updateNotes = () => {
  const showArchive = getArchiveVariable();
  if (showArchive === 'true') {
    showArchivedNotes();
  } else {
    showActiveNotes();
  }
};

// show notes that archived: true
export const showArchivedNotes = () => {
  renderHeader('Archived Notes');
  setArchiveVariable('true');
  const notes = filterNotes('true');
  renderTable(notes);
};

// archived: false
export const showActiveNotes = () => {
  renderHeader('Notes');
  setArchiveVariable('false');
  const notes = filterNotes('false');
  renderTable(notes);
};
