/* reused functions for handling data */
import {categories} from '../constants';


const parseDates = (content) => {
  const re = new RegExp('[\\d]{1,2}\\/[\\d]{1,2}\\/[\\d]{2,4}', 'g');
  const matches = content.matchAll(re);
  const res = [];
  for (const match of matches) {
    res.push(match[0]);
  }
  return res.join(', ');
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

  res.name = formElements.name.value;

  const currentDate = new Date();
  const optionsDate = {day: 'numeric', month: 'short', year: 'numeric'};
  res.created = currentDate.toLocaleDateString('en-EN', optionsDate);

  res.category = formElements.category.value;
  res.content = formElements.content.value;
  res.dates = parseDates(formElements.content.value);

  return res;
};

const findInTd = (tdList, id) => {
  const tdName = tdList.find((item) => {
    return item.children[0].id === id;
  });
  return tdName.children[0].value;
};

export const pushEditedNote = (container, id) => {
  const parsedId = getParsedId(id);
  const tdList = [...container.children].filter((item) => {
    return item.children[0];
  });
  const name = findInTd(tdList, 'name');
  const category = findInTd(tdList, 'category');
  const content = findInTd(tdList, 'content');

  const notes = getParsedNotes();
  const editedNotes = notes.map((item) => {
    if (item.id === parsedId) {
      item.icon = categories[category];
      item.name = name;
      item.category = category;
      item.content = content;
      item.dates = parseDates(content);
      return item;
    }
    return item;
  });

  setNotes(editedNotes);
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

export const getValues = (id) => {
  const notes = getParsedNotes();
  const note = notes.find((item) => item.id === id);
  return {
    name: note.name,
    category: note.category,
    content: note.content,
  };
};

export const getStats = () => {
  const notes = getParsedNotes();
  const stats = [];
  const keys = Object.keys(categories);

  keys.forEach((key) => {
    let archived = 0;
    let active = 0;

    notes.forEach((note) => {
      if (note.archived === 'true' && note.category === key) {
        archived += 1;
      }
      if (note.archived === 'false' && note.category === key) {
        active += 1;
      }
    });

    stats.push({
      icon: categories[key],
      key,
      archived,
      active,
    });
  });

  return stats;
};

export const setNotes = (notes) => {
  localStorage.setItem('all-notes', JSON.stringify(notes));
};

export const setArchiveVariable = (value) => {
  localStorage.setItem('show-archive', value);
};
