import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'designary-grey-container',
  styleUrl: 'designary-grey-container.css',
  shadow: true,
})
export class DesignaryGreyContainer {

  @Prop() containerTitle: string;

  render() {
    return (
      <Host>
        <div class="grey-container">
          {this.containerTitle}
          <div class="greyline"></div>
          <div class="component-container"> 
            <div class="slot-container">  
              <slot name="first-component"></slot>
            </div>
            <div class="slot-container">
              <slot name="second-component"></slot>
            </div>
          </div>
        </div>
      </Host>
    );
  }

}
