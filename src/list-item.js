import ListItemTemplate from './list-item-template';

const listItemTemplate = new ListItemTemplate();

class ListItem {

  constructor() {
    this.id = null;
    this.containerNode = null;
    this.domNode = null;
    this.template = null;
  }

  init(data) {
    Object.assign(this, data);
    this.render();
  }

  render() {
    const context = {
      name: 'list name & <> ""'
    };
    this.template = listItemTemplate.renderTemplate(context);
    this.containerNode.innerHTML = this.template;
    
    // this.domNode = this.containerNode.querySelector('.list');
    // this.domNode.id = this.id;
    
    this.postRender();
  }

  postRender() {

  }
  
}

export default ListItem;
