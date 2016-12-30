import Utility from './utility';

const utility = new Utility();

class ListTemplate {

  constructor() {
    this.template = null;
  }

  renderTemplate() {
    this.template = utility.SaferHTML`
      <div class="list">
        <ul class="thumb-list-a">
        </ul>
      </div>
    `;
    return this.template;
  }

}

export default ListTemplate;
