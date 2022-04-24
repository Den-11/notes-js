/* render header, table with notes, table with statistics,
 handle form for adding new notes */
import {drawMainHeaders, drawMainContent} from './renderMain';
import {
  mainTableId, headerId, editingContainerId, statTableId,
} from '../constants';
import {
  generateEditButtons, generateDiscardButton, generateElements,
} from './renderForms';
import {appendTD} from './renderHelper';
import {drawStatContent, drawStatHeaders} from './renderStats';


export const renderTable = (tableContent) => {
  const table = document.createElement('table');
  table.classList.add('table');

  const tHead = drawMainHeaders();
  table.appendChild(tHead);

  const tBody = drawMainContent(tableContent);
  table.appendChild(tBody);

  const tableContainer = document.querySelector(`#${mainTableId}`);
  tableContainer.replaceChildren(table);
};

export const renderHeader = (string) => {
  const header = document.querySelector(`#${headerId}`);
  const h = document.createElement('h1');
  h.textContent = string;
  header.replaceChildren(h);
};

export const renderNewForm = (formId, containerId) => {
  const container = document.querySelector(`#${containerId}`);
  const form = document.createElement('form');
  form.classList.add('form-inline');
  form.id = formId;

  const row = document.createElement('div');
  row.classList.add('row', 'justify-content-end');

  const elements = generateElements();
  const button = generateDiscardButton();

  [
    button,
    elements.nameInput,
    elements.categorySelect,
    elements.contentInput,
  ].forEach((item) => {
    const div = document.createElement('div');
    div.appendChild(item);
    div.classList.add('align-self-center', 'col-auto');
    row.appendChild(div);
  });

  form.appendChild(row);
  container.appendChild(form);
};

export const deleteNewForm = (formId) => {
  const form = document.querySelector(`#${formId}`);
  form.remove();
};

export const renderEditForm = (id, values) => {
  const container = document.querySelector(`#tr-${id}`);
  const tr = document.createElement('tr');
  tr.id = editingContainerId;

  const elements = generateElements(
      values.name, values.selected, values.content,
  );
  const buttons = generateEditButtons(id);
  const emptyElement = document.createElement('p');

  appendTD(tr, [
    emptyElement,
    elements.nameInput,
    emptyElement,
    elements.categorySelect,
    elements.contentInput,
    emptyElement,
    emptyElement,
    buttons.saveButton,
    buttons.discardButton,
  ]);

  container.replaceWith(tr);
};

export const renderStatTable = () => {
  const table = document.createElement('table');
  table.classList.add('table');

  const tHead = drawStatHeaders();
  table.appendChild(tHead);

  const tBody = drawStatContent();
  table.appendChild(tBody);

  const tableContainer = document.querySelector(`#${statTableId}`);
  tableContainer.replaceChildren(table);
};
