import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProductCard from './ProductCard';
import { Container} from "react-bootstrap";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      arrows:false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      speed: 500,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
           
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            
          }
        }
      ]
    };
    return (
      <div className="parts__container mt-5">
        <Container>
        <h1 className="text-center"> BENZER ÜRÜNLER </h1>
        <hr />
        <Slider className="px-5" {...settings}>
            <div>
            <ProductCard />
                </div>
                <div>
                <ProductCard />
                </div>
                <div>
                <ProductCard />
                </div>
                <div>
                <ProductCard />
                </div>
                <div>
                <ProductCard />
                </div>
                <div>
                <ProductCard />
                </div>
                <div>
                <ProductCard />
                </div>
                <div>
                <ProductCard />
                </div>
            </Slider>

        </Container>
      </div>
    );
  }
}