/* functions used in event listeners */
import {addContainerId, addFormId, editingContainerId} from '../constants';
import {updateNotes} from './filter';
import {
  deleteNewForm, renderNewForm, renderEditForm,
} from '../rendering/render';
import {
  getParsedId, getParsedNotes, getValues, setNotes,
  completeNote, pushEditedNote, pushNewNote,
} from './helper';


export const addNote = () => {
  const form = document.querySelector(`#${addFormId}`);

  if (form) {
    const note = completeNote(form);
    pushNewNote(note);
    deleteNewForm(addFormId);
    updateNotes();
  } else {
    renderNewForm(addFormId, addContainerId);
  }
};

export const discardAdding = () => {
  deleteNewForm(addFormId);
};

export const editNote = (id) => {
  const parsedId = getParsedId(id);
  const container = document.querySelector(`#${editingContainerId}`);
  if (container) {
    updateNotes();
  }
  const values = getValues(parsedId);
  renderEditForm(parsedId, values);
};

export const saveEditing = (id) => {
  const container = document.querySelector(`#${editingContainerId}`);
  pushEditedNote(container, id);
  updateNotes();
};

export const discardEditing = () => {
  updateNotes();
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
