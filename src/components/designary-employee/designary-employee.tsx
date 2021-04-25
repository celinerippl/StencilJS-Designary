import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'designary-employee',
  styleUrl: 'designary-employee.css',
  shadow: true,
})
export class DesignaryEmployee {

  @Prop test: String;

  render() {

    return (
      <Host>
        <div>{this.test} </div>
        <slot></slot>
      </Host>
    );
  }

}
