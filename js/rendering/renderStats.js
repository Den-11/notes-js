/* render table with statistics */
import {appendTD, assignP, assignTD, generateButton} from './renderHelper';
import {statTableHeaders} from '../constants';
import {getStats} from '../logic/helper';


export const drawStatHeaders = () => {
  const root = document.createElement('thead');
  root.classList.add('thead');
  const tr = document.createElement('tr');

  assignTD(tr, statTableHeaders);

  root.appendChild(tr);
  return root;
};

export const drawStatContent = () => {
  const root = document.createElement('tbody');
  root.classList.add('tbody');

  const stats = getStats();

  stats.forEach((item) => {
    const tr = document.createElement('tr');

    const checkedId = item.key.replace(/\s/g, '');
    const icon = generateButton(`ico-${checkedId}`, ['icon'], item.icon);

    const pData = assignP({
      key: item.key,
      active: item.active,
      archived: item.archived,
    });

    appendTD(tr, [
      icon,
      pData.key,
      pData.active,
      pData.archived,
    ]);

    root.appendChild(tr);
  });

  return root;
};
