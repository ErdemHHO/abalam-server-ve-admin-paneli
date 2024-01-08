import React, { Component } from "react";
import Slider from "react-slick";
import CommentCard from "./CommentCard";
import {Container} from "react-bootstrap"

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      arrows:true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
      ]
    };
    return (
      <div className="comment-slider mt-4 p-4 justify-content-center">
            <Slider className="px-3 mx-3" {...settings}>
            <div>
                <CommentCard />
            </div>
            <div>
                <CommentCard />
            </div>
            <div>
                <CommentCard />
            </div>
            <div>
                <CommentCard />
            </div>
            <div>
                <CommentCard />
            </div>
            <div>
                <CommentCard />
            </div>
            <div>
                <CommentCard />
            </div>
            </Slider>            
      </div>
    );
  }
}