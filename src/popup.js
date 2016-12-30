import PopupTemplate from './popup-template';
import LightboxTemplate from './lightbox-template';
import Utility from './utility';

const utility = new Utility();
const popupTemplate = new PopupTemplate();
const lightboxTemplate = new LightboxTemplate();

class Popup {

  constructor() {
    // dom stuff
    this.id = null;
    this.domNode = null;
    this.maskNode = null;
    this.bodyNode = null;
    this.contentNode = null;
    this.containerNode = null;
    
    // templates
    this.template = null;
    this.lightboxTemplate = null;

    // other properties
    this.index = null;
    this.photo = null;
    this.total = null;
    this.openFlag = false;
  }

  init(data) {
    Object.assign(this, data);
    // console.log(this);
    this.render();
  }

  render() {
    if (this.domNode == null) {
      const context = {
        title: '', 
        body: ''
      };
      this.template = popupTemplate.renderTemplate(context);
      const maskId = utility.unique('mask_');
      const bodyId = utility.unique('popupbody_');
      document.body.insertAdjacentHTML('beforeend', `<div class="popup" id="${this.id}"></div><div class="popup-mask" id="${maskId}"></div>`);
      this.domNode = document.getElementById(this.id);
      this.maskNode = document.getElementById(maskId);
      this.domNode.innerHTML = this.template;
      this.bodyNode = this.domNode.querySelector('.popup-body');
      this.bodyNode.id = bodyId;
      this.contentNode = this.domNode.querySelector('.popup-content');
      this.containerNode = this.domNode.querySelector('.popup-cont');
    } else {
      console.log('re-render');
    }
      
    this.postRender();
  }

  postRender() {
    // event listeners
    
    // close
    this.domNode.querySelector('.popup-close').addEventListener('click', (e) => {
      e.stopPropagation();
      this.close();
    });
    
    // hover
    this.contentNode.addEventListener('mouseover', () => {
      this.contentNode.classList.add('hover');
    });
    this.contentNode.addEventListener('mouseout', () => {
      this.contentNode.classList.remove('hover');
    });
    
    // click on edges
    this.containerNode.addEventListener('click', (e) => {
      if (!this.contentNode.classList.contains('hover')) {
        e.preventDefault();
        this.close();
      }
    });

    // keys to close
    document.addEventListener('keyup', (e) => {
      if (this.openFlag) {
        if (e.keyCode === 13 || e.keyCode === 27 || e.keyCode === 32) {
          this.close();
        }
      }
    });
  }
  
  reRender(data) {
    this.index = data.index;
    this.photo = data.photo;
    this.total = data.total;
    const context = {
      title: this.title, 
      url: this.photo['url_l'],
      index: this.index,
      total: this.total,
      height: parseInt(this.photo['height_l'], 10),
      width: parseInt(this.photo['width_l'], 10)
    };
    this.lightboxTemplate = lightboxTemplate.renderTemplate(context);
    this.bodyNode.innerHTML = this.lightboxTemplate;
  }

  show(data) {
    this.reRender(data);
    this.domNode.classList.add('shown');
    document.body.classList.add('popup-on');
    this.openFlag = true;
  }
  
  close() {
    this.domNode.classList.remove('shown');
    document.body.classList.remove('popup-on');
    this.openFlag = true;
    // fast-remove all child elements
    while (this.bodyNode.firstChild) {
      this.bodyNode.removeChild(this.bodyNode.firstChild);
    }
  }
  
}

export default Popup;
