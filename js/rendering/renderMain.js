/* render table with notes */
import {awesomeIcons, mainTableHeaders} from '../constants';
import {getArchiveVariable} from '../logic/helper';
import {showActiveNotes, showArchivedNotes} from '../logic/filter';
import {archiveNote, deleteNote, editNote} from '../logic/processing';
import {generateButton, appendTD, assignTD, assignP} from './renderHelper';


const headerButtons = () => {
  const activateButton = generateButton(
      'archive-header', ['icon-hover', 'icon-unarchive'],
      awesomeIcons.archive, 'Show active notes', showActiveNotes);

  const archiveButton = generateButton(
      'archive-header', ['icon-hover', 'icon-archive'],
      awesomeIcons.archive, 'Show archived notes', showArchivedNotes);

  const deleteButton = generateButton(
      'delete-header', ['icon'], awesomeIcons.trash);

  return {activateButton, archiveButton, deleteButton};
};

const mainButtons = (item) => {
  const icoButton = generateButton(
      `ico-${item.id}`, ['icon'], item.icon);

  const editButton = generateButton(
      `edit-${item.id}`, ['icon-hover', 'icon-edit'],
      awesomeIcons.pen, 'Edit', editNote);

  const archiveButton = generateButton(
      `archive-${item.id}`, ['icon-hover', 'icon-archive'],
      awesomeIcons.archive, 'Archive', archiveNote);

  const deleteButton = generateButton(
      `delete-${item.id}`, ['icon-hover', 'icon-delete'],
      awesomeIcons.trash, 'Delete', deleteNote);

  return {icoButton, editButton, archiveButton, deleteButton};
};

export const drawMainHeaders = () => {
  const root = document.createElement('thead');
  root.classList.add('thead');
  const tr = document.createElement('tr');

  assignTD(tr, mainTableHeaders);

  const buttons = headerButtons();

  const buttonsToAdd = [];
  const showArchive = getArchiveVariable();
  if (showArchive === 'true') {
    buttonsToAdd.push(buttons.activateButton);
  } else {
    buttonsToAdd.push(buttons.archiveButton);
  }

  buttonsToAdd.push(buttons.deleteButton);

  appendTD(tr, buttonsToAdd);

  root.appendChild(tr);
  return root;
};

export const drawMainContent = (content) => {
  const root = document.createElement('tbody');
  root.classList.add('tbody');

  content.forEach((item) => {
    const tr = document.createElement('tr');
    tr.id = 'tr-' + item.id;

    const buttons = mainButtons(item);

    const pData = assignP({
      name: item.name,
      created: item.created,
      category: item.category,
      content: item.content,
      dates: item.dates,
    });

    appendTD(tr, [
      buttons.icoButton,
      pData.name,
      pData.created,
      pData.category,
      pData.content,
      pData.dates,
      buttons.editButton,
      buttons.archiveButton,
      buttons.deleteButton,
    ]);

    root.appendChild(tr);
  });

  return root;
};
