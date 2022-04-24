import {categories} from '../constants';

const parseDates = (content) => {
  return 'dates';
};

const createID = () => {
  const notes = getParsedNotes();
  const max = notes.reduce((prev, current) => {
    return ( prev.id > current.id ? prev : current );
  }, 0);

  if (max) {
    return parseInt(max.id) + 1;
  }

  return 0;
};

export const completeNote = (form) => {
  const formElements = form.elements;
  const res = {};
  res.id = createID().toString();
  res.archived = 'false';
  res.icon = categories[formElements.category.value];
  res.data = {};
  res.data.name = formElements.name.value;
  res.data.created = new Date().toTimeString();
  res.data.category = formElements.category.value;
  res.data.content = formElements.content.value;
  res.data.dates = parseDates(formElements.content.value);

  return res;
};

export const pushNewNote = (note) => {
  const allNotes = getParsedNotes();
  allNotes.push(note);
  setNotes(allNotes);
};

export const getParsedNotes = () => {
  const localNotes = localStorage.getItem('all-notes');
  return JSON.parse(localNotes);
};

export const getArchiveVariable = () => {
  return localStorage.getItem('show-archive');
};

export const getParsedId = (id) => {
  return id.split('-')[1];
};

export const setNotes = (notes) => {
  localStorage.setItem('all-notes', JSON.stringify(notes));
};

export const setArchiveVariable = (value) => {
  localStorage.setItem('show-archive', value);
};
