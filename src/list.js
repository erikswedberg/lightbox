import ListTemplate from './list-template';
import ListItem from './list-item';

const listTemplate = new ListTemplate();

class List {

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
    this.template = listTemplate.renderTemplate(context);
    this.containerNode.innerHTML = this.template;
    this.domNode = this.containerNode.querySelector('.list');
    this.domNode.id = this.id;
    
    this.postRender();
  }

  postRender() {
    this.getListData();
  }
  
  getListData() {
    const apiKey = 'bb36a2c0ab02c66df673e1dad6916cd7';
    const page = 1;
    const perPage = 20;
    const date = '2016-12-23';
    const url = `https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${apiKey}&format=json&nojsoncallback=1&extras=can_comment%2Ccount_comments%2Ccount_faves%2Cdescription%2Cisfavorite%2Clicense%2Cmedia%2Cneeds_interstitial%2Cowner_name%2Cpath_alias%2Crealname%2Crotation%2Curl_c%2Curl_l%2Curl_m%2Curl_n%2Curl_q%2Curl_s%2Curl_sq%2Curl_t%2Curl_z&per_page=${perPage}&page=${page}&date=${date}&viewerNSID=&csrf=&hermes=1&hermesClient=1`;
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
      if (xhr.status >= 400) {
        console.error('request failed!');
      } else {
        this.initPhotos(JSON.parse(xhr.responseText));
      }
    };
    xhr.onerror = function () {
      console.error('request failed!');
    };
    xhr.send();
  }
  
  initPhotos(data) {
    console.log(data);
    if ('photos' in data && 'photo' in data['photos']) {
      data['photos']['photo'].forEach(
        (photo) => {
          const listItem = new ListItem();
          console.log(listItem, photo);
        }
      );
    }
  }
}

export default List;
