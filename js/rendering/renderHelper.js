/* reused functions for rendering */
export const generateButton = (id, styles, icon, title, callback) => {
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

  return i;
};

export const assignP = (obj) => {
  const parsed = {};
  const keys = Object.keys(obj);

  keys.forEach((element) => {
    const p = document.createElement('p');
    p.innerHTML = obj[element];
    parsed[element] = p;
  });

  return parsed;
};

export const appendTD = (tr, array) => {
  array.forEach((element) => {
    const td = document.createElement('td');
    td.appendChild(element);
    tr.appendChild(td);
  });
};

export const assignTD = (tr, array) => {
  array.forEach((element) => {
    const td = document.createElement('td');
    td.innerHTML = element;
    tr.appendChild(td);
  });
};
