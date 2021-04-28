import { Component, Host, h, Prop } from '@stencil/core' ;

@Component({
    tag: 'designary-contact',
    styleUrl : 'designary-contact.css'
})

export class DesignaryContact {
    
  @Prop() containerTitle: string;

  render() {
      return (
          <Host>
            <div class="sign-up">
            <div class="flex-col">
              <h1 class="title-tagh4">Get In Touch</h1>
              <div class="flex-row">
                <div class="icon-1">
                  <div class="overlap-group3">
                    <div class="path-1 border-2px-gallery"></div>
                  </div>
                </div>
                <div class="address">Beispielstraße 1, 12345 Musterstadt</div>
              </div>
              <div class="flex-row-3">
                <img class="path" src='src/icons/contact-icon8.png'/>
                <div class="phone lato-light-gallery-16px">(+1) 123 456 7890</div>
              </div>
              <div class="flex-row-1">
                <div class="icon">
                  <div class="overlap-group4 border-2px-gallery">
                    <img class="line-1" src='src/icons/contact-icon5.png'/>
                  </div>
                </div>
                <div class="mobile lato-light-gallery-16px">(+1) 098 765 4321</div>
              </div>
              <div class="flex-row-2">
                <div class="input-1"><div class="value-2 lato-normal-concrete-16px">Name</div></div>
                <div class="input"><div class="value-1 lato-normal-concrete-16px">Email Address</div></div>
              </div>
              <div class="textarea">
                <div class="overlap-group2">
                  <div class="area-displayel-ultstatedefault"></div>
                  <div class="value">Write your message here</div>
                </div>
              </div>
              <div class="button"><div class="label">Send</div></div>
            </div>
            <div class="overlap-group">
              <div class="location-pin">
                <div class="ellipse-fillstyle2brand"></div>
              </div>
              <div class="circle-button">
                <div class="icon-2">
                  <div class="overlap-group1">
                    <img class="line"src='src/icons/contact-icon4.png'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Host>
      );
    }
}