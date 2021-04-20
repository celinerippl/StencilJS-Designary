import { Component } from '@stencil/core' ;

@component({
    tag: 'designary-slider'
    styleUrl : 'designary-slider.css'
})

export class DesignarySlider {
    render() {
        <div id="slider">
            <input type="radio" name="slider" id="slide1" checked>
            <input type="radio" name="slider" id="slide2">
            <input type="radio" name="slider" id="slide3">
            <input type="radio" name="slider" id="slide4">
            <div id="slides">
                <div id="overflow">
                    <div class="inner">
                        <div class="slide slide_1">
                            <div class="slide-content">
                                <h2>Web-Design</h2>
                                <p>Lorum Ipsum</p>
                            </div>
                        </div>
                        <div class="slide slide_2">
                            <div class="slide-content">
                                <h2>Logo</h2>
                                <p>Lorum Ipsum</p>
                            </div>
                        </div>
                        <div class="slide slide_3">
                            <div class="slide-content">
                                <h2>Add-banner</h2>
                                <p>Lorum Ipsum</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
            <div id="controls">
                <label for="slide1"></label>
                <label for="slide2"></label>
                <label for="slide3"></label>
            </div>
            <div id="bullets">
                <label for="slide1"></label>
                <label for="slide2"></label>
                <label for="slide3"></label>
            </div>
        </div>
    }
}