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
      arrows:false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      autoplay: true,
      speed: 500,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="parts__container mt-5">
        <Container fluid>
        <h2 className="h1 text-center"> FAVORİ ÜRÜNLER </h2>
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