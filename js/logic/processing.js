import {deleteNewForm, renderNewForm} from '../rendering/render';
import {addContainerId, addFormId} from '../constants';
import {updateNotes} from './filter';
import {
  getParsedId, getParsedNotes, setNotes, pushNewNote, completeNote,
} from './helper';

export const addNote = () => {
  const form = document.querySelector(`#${addFormId}`);
  const container = document.querySelector(`#${addContainerId}`);

  if (form) {
    const note = completeNote(form);
    pushNewNote(note);
    deleteNewForm(container);
    updateNotes();
  } else {
    renderNewForm(addFormId, addContainerId);
  }
};

export const discardAdding = () => {
  const container = document.querySelector(`#${addContainerId}`);
  deleteNewForm(container);
};

export const editNote = (id) => {
};

export const archiveNote = (id) => {
  const parsedId = getParsedId(id);
  const parsedNotes = getParsedNotes();

  const processedNotes = parsedNotes.map((item) => {
    if (item.id === parsedId) {
      item.archived === 'true' ?
        item.archived = 'false' : item.archived = 'true';
    }
    return item;
  });

  setNotes(processedNotes);
  updateNotes();
};

export const deleteNote = (id) => {
  const parsedId = getParsedId(id);
  const parsedNotes = getParsedNotes();

  const processedNotes = parsedNotes.filter((item) => {
    return item.id !== parsedId;
  });

  setNotes(processedNotes);
  updateNotes();
};
