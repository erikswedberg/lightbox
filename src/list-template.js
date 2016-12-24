import Utility from './utility';

const utility = new Utility();

class ListTemplate {

  constructor() {
    this.template = null;
  }

  renderTemplate(data) {
    this.template = utility.SaferHTML`
      <div class="list">
        <ul>
          <li>${data.name}</li>
        </ul>
      </div>
    `;
    return this.template;
  }

}

export default ListTemplate;
