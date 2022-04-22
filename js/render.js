import {tableHeaders, awesomeIcons} from './constants';
import {showArchivedNotes} from './switch';
import {editNote, deleteNote, archiveNote} from './processing';

const mainTableId = '#main-table-container';

// creates td element with icon
const generateTdButton = (id, style, icon, callback) => {
  const td = document.createElement('td');

  const i = document.createElement('i');
  i.classList.add(style, ...icon);
  i.id = id;

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
    const td = document.createElement('th');
    td.innerHTML = element;
    tr.appendChild(td);
  });

  const tdArchive = generateTdButton(
      'archive-header', 'icon-archive', awesomeIcons.archive,
      showArchivedNotes);
  tr.appendChild(tdArchive);

  const tdDelete = generateTdButton(
      'delete-header', 'icon', awesomeIcons.trash);
  tr.appendChild(tdDelete);

  root.appendChild(tr);
  return root;
};

// creates content for table with notes
const drawMainTable = (content) => {
  const root = document.createElement('tbody');
  root.classList.add('tbody');

  content.forEach((item) => {
    const tr = document.createElement('tr');

    const tdIco = generateTdButton(
        `ico-${item.id}`, 'icon', item.icon);
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
        `edit-${item.id}`, 'icon-edit', awesomeIcons.pen, editNote);
    tr.appendChild(tdEdit);

    const tdArchive = generateTdButton(
        `archive-${item.id}`, 'icon-archive', awesomeIcons.archive,
        archiveNote);
    tr.appendChild(tdArchive);

    const tdDelete = generateTdButton(
        `delete-${item.id}`, 'icon-delete', awesomeIcons.trash, deleteNote);
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

  const tBody = drawMainTable(tableContent);
  table.appendChild(tBody);

  const mainTableContainer = document.querySelector(mainTableId);
  mainTableContainer.replaceChildren(table);
};
