import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'designary-grey-container',
  styleUrl: 'designary-grey-container.css',
  shadow: true,
})
export class DesignaryGreyContainer {

  render() {
    return (
      <Host>
        <div class="grey-container">
          <slot></slot>
        </div>
      </Host>
    );
  }

}
