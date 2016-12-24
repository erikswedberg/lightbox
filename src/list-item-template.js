import Utility from './utility';

const utility = new Utility();

class ListItemTemplate {

  constructor() {
    this.template = null;
  }

  renderTemplate(data) {
    this.template = utility.SaferHTML`
      <li>${data.name}</li>
    `;
    return this.template;
  }

}

export default ListItemTemplate;
