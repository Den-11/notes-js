import {
  tableHeaders, awesomeIcons, mainTableId, headerId, categories,
} from '../constants';
import {showActiveNotes, showArchivedNotes} from '../logic/filter';
import {
  editNote, deleteNote, archiveNote, addNote, discardAdding,
} from '../logic/processing';
import {getArchiveVariable} from '../logic/helper';

// creates td element with icon
const generateTdButton = (id, styles, icon, title, callback) => {
  const td = document.createElement('td');

  const i = document.createElement('i');
  i.classList.add(...styles, ...icon);
  i.id = id;

  if (title) {
    i.title = title;
  }

  if (callback) {
    i.addEventListener('click', (e) => {
      callback(e.target.id);
    });
  }

  td.appendChild(i);
  return td;
};

// creates headers row for table with notes
const drawMainHeaders = () => {
  const root = document.createElement('thead');
  root.classList.add('thead');
  const tr = document.createElement('tr');

  tableHeaders.forEach((element) => {
    const td = document.createElement('td');
    td.innerHTML = element;
    tr.appendChild(td);
  });

  const showArchive = getArchiveVariable();
  if (showArchive === 'true') {
    const tdArchive = generateTdButton(
        'archive-header', ['icon-hover', 'icon-unarchive'],
        awesomeIcons.archive, 'Show active notes', showActiveNotes);

    tr.appendChild(tdArchive);
  } else {
    const tdArchive = generateTdButton(
        'archive-header', ['icon-hover', 'icon-archive'],
        awesomeIcons.archive, 'Show archived notes', showArchivedNotes);

    tr.appendChild(tdArchive);
  }

  const tdDelete = generateTdButton(
      'delete-header', ['icon'], awesomeIcons.trash);
  tr.appendChild(tdDelete);

  root.appendChild(tr);
  return root;
};

// creates content for table with notes
const drawMainContent = (content) => {
  const root = document.createElement('tbody');
  root.classList.add('tbody');

  content.forEach((item) => {
    const tr = document.createElement('tr');

    const tdIco = generateTdButton(
        `ico-${item.id}`, ['icon'], item.icon);
    tr.appendChild(tdIco);

    // iterate through each property in data
    const data = item.data;
    const keys = Object.keys(data);
    keys.forEach((element) => {
      const td = document.createElement('td');
      td.innerHTML = data[element];
      tr.appendChild(td);
    });

    const tdEdit = generateTdButton(
        `edit-${item.id}`, ['icon-hover', 'icon-edit'],
        awesomeIcons.pen, 'Edit', editNote);
    tr.appendChild(tdEdit);

    const tdArchive = generateTdButton(
        `archive-${item.id}`, ['icon-hover', 'icon-archive'],
        awesomeIcons.archive, 'Archive', archiveNote);
    tr.appendChild(tdArchive);


    const tdDelete = generateTdButton(
        `delete-${item.id}`, ['icon-hover', 'icon-delete'],
        awesomeIcons.trash, 'Delete', deleteNote);
    tr.appendChild(tdDelete);

    root.appendChild(tr);
  });

  return root;
};

// renders table with notes
export const renderTable = (tableContent) => {
  const table = document.createElement('table');
  table.classList.add('table');

  const tHead = drawMainHeaders();
  table.appendChild(tHead);

  const tBody = drawMainContent(tableContent);
  table.appendChild(tBody);

  const mainTableContainer = document.querySelector(`#${mainTableId}`);
  mainTableContainer.replaceChildren(table);
};

export const renderHeader = (string) => {
  const header = document.querySelector(`#${headerId}`);
  const h = document.createElement('h1');
  h.textContent = string;
  header.replaceChildren(h);
};

const generateFormElements = (nameValue = '', contentValue = '') => {
  const nameInput = document.createElement('input');
  nameInput.id = 'name';
  nameInput.classList.add('form-control');
  nameInput.placeholder = nameValue;

  const categorySelect = document.createElement('select');
  categorySelect.id = 'category';
  categorySelect.classList.add('form-select');
  const categoriesKeys = Object.keys(categories);
  categoriesKeys.forEach((element) => {
    const option = document.createElement('option');
    option.textContent = element;
    categorySelect.appendChild(option);
  });

  const contentInput = document.createElement('input');
  contentInput.id = 'content';
  contentInput.classList.add('form-control');
  contentInput.placeholder = contentValue;

  const saveButton = document.createElement('i');
  saveButton.classList.add(...awesomeIcons.trash);
  saveButton.addEventListener(('click'), () => {
    addNote();
  });

  const discardButton = document.createElement('i');
  discardButton.classList.add(...awesomeIcons.trash);
  discardButton.addEventListener(('click'), () => {
    discardAdding();
  });

  return [nameInput, categorySelect, contentInput, saveButton, discardButton];
};

export const renderNewForm = (formId, containerId) => {
  const container = document.querySelector(`#${containerId}`);
  const form = document.createElement('form');
  form.classList.add('form-inline');
  form.id = formId;

  const formElements = generateFormElements();
  const row = document.createElement('div');
  row.classList.add('row');

  const discard = document.createElement('div');
  discard.appendChild(formElements[4]);
  discard.classList.add('col-1');
  row.appendChild(discard);

  const name = document.createElement('div');
  name.appendChild(formElements[0]);
  name.classList.add('col-3');
  row.appendChild(name);

  const select = document.createElement('div');
  select.appendChild(formElements[1]);
  select.classList.add('col-2');
  row.appendChild(select);

  const content = document.createElement('div');
  content.appendChild(formElements[2]);
  content.classList.add('col-5');
  row.appendChild(content);

  form.appendChild(row);
  container.appendChild(form);
};

export const deleteNewForm = (formId) => {

};
