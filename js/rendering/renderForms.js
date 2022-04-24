import {awesomeIcons, categories} from '../constants';
import {generateButton} from './renderHelper';
import {discardAdding, discardEditing, saveEditing} from '../logic/processing';

const generateInput = (id, value, placeholder) => {
  const input = document.createElement('input');

  input.id = id;
  input.classList.add('form-control');
  input.value = value;
  input.placeholder = placeholder;
  input.autocomplete = 'off';

  return input;
};

export const generateElements = (
    nameValue = '', selectValue = 'Task', contentValue = '') => {
  const nameInput = generateInput('name', nameValue, 'Name');
  const contentInput = generateInput('content', contentValue, 'Content');

  const categorySelect = document.createElement('select');
  categorySelect.id = 'category';
  categorySelect.classList.add('form-select');

  const categoriesKeys = Object.keys(categories);

  categoriesKeys.forEach((element) => {
    const option = document.createElement('option');
    option.textContent = element;
    categorySelect.appendChild(option);
  });

  return {nameInput, categorySelect, contentInput};
};

export const generateEditButtons = (id) => {
  const saveButton = generateButton(
      `save-${id}`, ['icon-hover', 'icon-edit'],
      awesomeIcons.accept, 'Save edited note', saveEditing);

  const discardButton = generateButton(
      'discard-edit', ['icon-hover', 'icon-delete'],
      awesomeIcons.discard, 'Discard changes', discardEditing);

  return {saveButton, discardButton};
};

export const generateDiscardButton = () => {
  return generateButton(
      'discard-edit', ['icon-hover', 'icon-delete'],
      awesomeIcons.discard, 'Discard changes', discardAdding);
};
