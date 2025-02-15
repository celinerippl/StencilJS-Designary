import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'designary-testimonial',
  styleUrl: 'designary-testimonial.css',
  shadow: true,
})

export class DesignaryTestimonial {

  render() {
    return (
      <Host>
        <div class="testimonial-container">
          <div class="greenline"></div>
            <div class="text-container">
              <slot name="text"></slot>
            </div>
          <div class="greenline"></div>
          <div class="customer-container">
              <slot name="person"></slot>
          </div>
        </div>
      </Host>
    );
  }

}
