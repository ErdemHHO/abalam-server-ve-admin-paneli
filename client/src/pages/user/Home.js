import React from "react";
import BackgroundFoto from "../../components/user/BackgroundFoto";
import Header from "../../components/user/Header";
import HomeCard from "../../components/user/HomeCard";
import Topbar from "../../components/user/Topbar";
import Slider from "../../components/user/Slider";
import NewProductSlider from "../../components/user/NewProductSlider";
import FavoriteProductSlider from "../../components/user/FavoriteProductSlider";
import CommentCard from "../../components/user/CommentCard";
import CommentSlider from "../../components/user/CommentSlider";
import Footer from "../../components/user/Footer";

import '../../stylesheet/index.css'; 


function Home() {
  return (
    <div>
      <Topbar />
      <Header />
      <div className="icerik2">
        <Slider />
        <HomeCard />
        <FavoriteProductSlider />
        <CommentSlider />
        <NewProductSlider />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
