import Utility from './utility';

const utility = new Utility();

class ListItemTemplate {

  constructor() {
    this.template = null;
  }

  renderTemplate(data) {
    this.template = utility.SaferHTML`
      <li class="list-item" data-id="${data.id}">
        <div class="list-item-cont">
          <div class="thumb"><img src="${data.src}" height="${data.height}" width="${data.width}" alt="${data.title}" /></div>
          <div class="title">${data.title}</div>
          <!--<div class="description">${data.description}</div>-->
      </li>
    `;
    return this.template;
  }

}

export default ListItemTemplate;
