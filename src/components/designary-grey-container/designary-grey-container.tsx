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
          <slot></slot>
        </div>
      </Host>
    );
  }

}
