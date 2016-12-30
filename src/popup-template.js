import Utility from './utility';

const utility = new Utility();

class PopupTemplate {

  constructor() {
    this.template = null;
  }

  renderTemplate(data) {
    this.template = utility.SaferHTML`
      <div class="popup-cont-cont-cont">
        <div class="popup-cont-cont">
          <div class="popup-cont" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="popup-dialog">
              <div class="popup-content">
                <div class="popup-header">
                  <a href="#" class="popup-close" aria-label="Close"></a>
                  <!--<h4 class="popup-title" id="myModalLabel">${data.title}</h4>-->
                </div>
                <div class="popup-body">
                  ${data.body}
                </div>
                <div class="popup-controls">
                  <div class="popup-controls-cont">
                    <div class="popup-controls-cont-cont">
                      <div class="left"><a href="#"><span>&#x25E3;</span></a></div>
                      <div class="right"><a href="#"><span>&#x25E3;</span></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    return this.template;
  }

}

export default PopupTemplate;
