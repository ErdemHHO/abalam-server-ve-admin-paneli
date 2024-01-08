import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      arrows:false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      adaptiveHeight: true
    };
    const settings2 = {
      dots: false,
      infinite: false,
      arrows:false,
      slidesToShow: 6,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: false
          }
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 0,
            slidesToScroll: 0,
            initialSlide: 1
          }
        }
      ]
    };
    
    return (
      <div className="slider-home">
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}{...settings}
        >
          <div className="slider1-foto">
            <img src="/images/download-3.jpg" alt="sliderFoto" className="sliderFoto1  "/>
          </div>
          <div className="slider1-foto">
            <img src="/images/download-2.jpg" alt="sliderFoto" className="sliderFoto1  "/>
          </div>
          <div className="slider1-foto">
            <img src="/images/download-3.jpg" alt="sliderFoto" className="sliderFoto1  "/>
          </div>
          <div className="slider1-foto">
            <img src="/images/download-2.jpg" alt="sliderFoto" className="sliderFoto1  "/>
          </div>
          <div className="slider1-foto">
            <img src="/images/download-3.jpg" alt="sliderFoto" className="sliderFoto1  "/>
          </div>
          <div className="slider1-foto">
            <img src="/images/download-2.jpg" alt="sliderFoto" className="sliderFoto1  "/>
          </div>
        </Slider>
        <Slider
        className="smallSlider d-none d-md-flex mx-5"
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div>
            <img src="/images/download-3.jpg" alt="sliderFoto" className="sliderFoto2"/>
          </div>
          <div>
            <img src="/images/download-2.jpg" alt="sliderFoto" className="sliderFoto2 "/>
          </div>
          <div>
            <img src="/images/download-3.jpg" alt="sliderFoto" className="sliderFoto2 "/>
          </div>
          <div>
            <img src="/images/download-2.jpg" alt="sliderFoto" className="sliderFoto2 "/>
          </div>
          <div>
            <img src="/images/download-3.jpg" alt="sliderFoto" className="sliderFoto2 "/>
          </div>
          <div>
            <img src="/images/download-2.jpg" alt="sliderFoto" className="sliderFoto2 "/>
          </div>
          <div>
            <img src="/images/download-3.jpg" alt="sliderFoto" className="sliderFoto2 "/>
          </div>
        </Slider>          
        </div>
    );
  }
}