import ListTemplate from './list-template';
import ListItem from './list-item';
import Utility from './utility';
import Popup from './popup';

const utility = new Utility();
const listTemplate = new ListTemplate();

class List {

  constructor() {
    this.id = null;
    this.containerNode = null;
    this.domNode = null;
    this.template = null;
    this.listItems = {};
    this.photos = [];
    this.popup = new Popup();
    this.total = null;
  }

  init(data) {
    Object.assign(this, data);
    this.render();
  }

  render() {
    const context = {
      name: 'list name & <> ""'
    };
    this.template = listTemplate.renderTemplate(context);
    this.containerNode.innerHTML = this.template;
    this.domNode = this.containerNode.querySelector('.list');
    this.domNode.id = this.id;
    
    this.postRender();
  }

  postRender() {
    // do a delegated event listener by walking up the DOM to find our desired containing target
    this.domNode.addEventListener('click', (e) => {
      const listItem = utility.findClassInParents(e.target, 'list-item', this.domNode);
      if (listItem !== undefined) {
        e.stopPropagation();
        this.showLightbox(parseInt(listItem.dataset.index, 10));
      }
    });
    
    this.getListData();
  }
  
  getListData(daysAgo = 0) {
    const apiKey = 'bb36a2c0ab02c66df673e1dad6916cd7';
    const page = 1;
    const perPage = 20;
    const d = new Date(Date.now() - (86400000 * daysAgo));
    const date = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    const url = `https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${apiKey}&format=json&nojsoncallback=1&extras=can_comment%2Ccount_comments%2Ccount_faves%2Cdescription%2Cisfavorite%2Clicense%2Cmedia%2Cneeds_interstitial%2Cowner_name%2Cpath_alias%2Crealname%2Crotation%2Curl_c%2Curl_l%2Curl_m%2Curl_n%2Curl_q%2Curl_s%2Curl_sq%2Curl_t%2Curl_z&per_page=${perPage}&page=${page}&date=${date}&viewerNSID=&csrf=&hermes=1&hermesClient=1`;
    let results = [];
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
      if (xhr.status >= 400) {
        console.error('request failed!');
      } else {
        results = JSON.parse(xhr.responseText);
        if ('stat' in results && results['stat'] === 'fail') {
          // if we received a failure message, try again with the previous day's date
          this.getListData(daysAgo + 1);
        } else {
          this.initPhotos(results);
        }
      }
    };
    xhr.onerror = function () {
      console.error('request failed!');
    };
    xhr.send();
  }
  
  initPhotos(data) {
    if ('photos' in data && 'photo' in data['photos']) {
      // add a list item per photo in the result data
      data['photos']['photo'].forEach(
        (photo, i) => {
          const listItem = new ListItem();
          const index = (data['photos']['page'] * (i + 1)) - 1;
          listItem.init({ photo, index, containerNode: this.domNode.querySelector('.thumb-list-a') });
          this.listItems[photo['id']] = listItem;
          this.photos[index] = photo;
        }
      );
    }
    if ('photos' in data && 'total' in data['photos']) {
      this.total = data['photos']['total'];
    }
  }
  
  showLightbox(index) {
    this.popup.init({ id: utility.unique('popup_') });
    this.popup.show({ photos: this.photos, index, total: this.total });
  }
}

export default List;
