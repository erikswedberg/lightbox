import List from './list';
import Utility from './utility';

const utility = new Utility();

const main = function () {
  const list = new List();
  list.init({ id: utility.unique('list_'), containerNode: document.querySelector('.list-cont') });
};

window.addEventListener('load', main);

