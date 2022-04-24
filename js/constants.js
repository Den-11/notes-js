/* all global constants */
export const mainTableId = 'main-table-container';
export const statTableId = 'stat-table-container';
export const headerId = 'nav-container';
export const addFormId = 'add-note-form';
export const addContainerId = 'add-note-container';
export const editingContainerId = 'editing-container';

export const awesomeIcons = {
  pen: ['fas', 'fa-pen'],
  archive: ['fas', 'fa-file-archive'],
  trash: ['fas', 'fa-trash'],
  accept: ['fas', 'fa-check'],
  discard: ['fas', 'fa-minus-circle'],
  cart: ['fas', 'fa-cart-shopping'],
  thought: ['fas', 'fa-comment-dots'],
  idea: ['fas', 'fa-lightbulb'],
};

export const categories = {
  'Task': awesomeIcons.cart,
  'Idea': awesomeIcons.idea,
  'Random Thought': awesomeIcons.thought,
};

export const tableContent = [
  {
    id: '1',
    archived: 'false',
    icon: awesomeIcons.cart,
    name: 'Shopping list',
    created: 'Apr 20, 2021',
    category: 'Task',
    content: 'Tomatoes, bread',
    dates: '&nbsp;',
  },
  {
    id: '2',
    archived: 'false',
    icon: awesomeIcons.thought,
    name: 'The theory of evolution',
    created: 'Apr 27, 2021',
    category: 'Random Thought',
    content: 'Evolution is change in the heritable characteristics ' +
      'of biological populations over successive generations.',
    dates: '&nbsp;',
  },
  {
    id: '3',
    archived: 'false',
    icon: awesomeIcons.thought,
    name: 'New Feature',
    created: 'May 05, 2021',
    category: 'Random Thought',
    content: 'I’m gonna have a dentist appointment on the 3/5/2021, ' +
      'I moved it from 5/5/2021',
    dates: '3/5/2021, 5/5/2021',
  },
  {
    id: '4',
    archived: 'false',
    icon: awesomeIcons.thought,
    name: 'William Gaddis',
    created: 'May 07, 2021',
    category: 'Random Thought',
    content: 'Power doesn\'t corrupt people, people corrupt power.',
    dates: '&nbsp;',
  },
  {
    id: '5',
    archived: 'false',
    icon: awesomeIcons.idea,
    name: 'Books',
    created: 'May 15, 2021',
    category: 'Idea',
    content: 'The Lean Startup',
    dates: '&nbsp;',
  },
  {
    id: '6',
    archived: 'true',
    icon: awesomeIcons.cart,
    name: 'Test archive note',
    created: 'Apr 23, 2021',
    category: 'Task',
    content: 'Test content',
    dates: '&nbsp;',
  },
  {
    id: '7',
    archived: 'true',
    icon: awesomeIcons.idea,
    name: 'Test archive note 2',
    created: 'Apr 22, 2021',
    category: 'Idea',
    content: 'Test content 2',
    dates: '&nbsp;',
  },
];

export const mainTableHeaders = [
  '&nbsp;',
  'Name',
  'Created',
  'Category',
  'Content',
  'Dates',
  '&nbsp;',
];

export const statTableHeaders = [
  '&nbsp;',
  'Note category',
  'Active',
  'Archived',
];

