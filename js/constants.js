export const mainTableId = 'main-table-container';
export const headerId = 'nav-container';
export const addFormId = 'add-note-form';
export const addContainerId = 'add-note-container';

export const awesomeIcons = {
  archive: ['fas', 'fa-file-archive'],
  cart: ['fas', 'fa-shopping-cart'],
  trash: ['fas', 'fa-trash'],
  pen: ['fas', 'fa-pen'],
};

export const categories = {
  'Task': awesomeIcons.cart,
  'Idea': awesomeIcons.pen,
  'Random Thought': awesomeIcons.trash,
};

export const tableHeaders = [
  '&nbsp;',
  'Name',
  'Created',
  'Category',
  'Content',
  'Dates',
  '&nbsp;',
];

export const tableContent = [
  {
    id: '1',
    archived: 'false',
    icon: awesomeIcons.cart,
    data: {
      name: 'Name',
      created: 'Created',
      category: 'Category',
      content: 'Content',
      Dates: '&nbsp;',
    },
  },
  {
    id: '2',
    archived: 'false',
    icon: awesomeIcons.cart,
    data: {
      name: 'Name',
      created: 'Created',
      category: 'Category',
      content: 'Content',
      dates: '&nbsp;',
    },
  },
];
