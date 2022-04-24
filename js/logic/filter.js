/* filter notes on 2 categories: active and archived,
  start rendering */
import {renderTable, renderStatTable, renderHeader} from '../rendering/render';
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

const display = (header, variable) => {
  renderHeader(header);
  setArchiveVariable(variable);
  const notes = filterNotes(variable);
  renderTable(notes);
  renderStatTable();
};

export const showArchivedNotes = () => {
  const header = 'Archived Notes';
  const variable = 'true';
  display(header, variable);
};

export const showActiveNotes = () => {
  const header = 'Notes';
  const variable = 'false';
  display(header, variable);
};
