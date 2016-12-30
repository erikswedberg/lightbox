import ListItemTemplate from './list-item-template';

const listItemTemplate = new ListItemTemplate();

class ListItem {

  constructor() {
    this.index = null;
    this.containerNode = null;
    this.domNode = null;
    this.template = null;
    this.photo = null;
  }

  init(data) {
    Object.assign(this, data);
    this.render();
  }

  render() {
    const context = {
      width: parseInt(this.photo['width_q'], 10),
      height: parseInt(this.photo['height_q'], 10),
      src: this.photo['url_q'],
      description: this.photo['description']['_content'],
      title: this.photo['title'],
      index: this.index, 
      id: this.photo['id']
    };
    this.template = listItemTemplate.renderTemplate(context);
    // append list item to list
    this.containerNode.insertAdjacentHTML('beforeend', this.template);
    this.domNode = this.containerNode.querySelector(`.list-item[data-id="${this.photo.id}"]`);
    
    this.postRender();
  }

  postRender() {

  }
  
}

export default ListItem;
