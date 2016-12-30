import Utility from './utility';

const utility = new Utility();

class LightboxTemplate {

  constructor() {
    this.template = null;
  }

  renderTemplate(data) {
    this.template = utility.SaferHTML`
      <div class="lightbox-cont">
        <img src="${data.url}" height="${data.height}" width="${data.width}" alt="${data.title}" />
      </div>
      <div class="lightbox-title">
        ${data.title}
      </div>
    `;
    return this.template;
  }

}

export default LightboxTemplate;
