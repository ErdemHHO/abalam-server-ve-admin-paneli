import React, { useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import * as api from '../../api/index'


const ProductDetailImages = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onSlide = (currentIndex) => {
    setCurrentIndex(currentIndex);
  };

  useEffect(() => {
    const getProduct = async () => {
      const response = await api.urunuGetir(id);
      setProduct(response.data.product[0]);

      
      const newImages = response.data.product[0].image_urls.map((url) => ({
        key:{url},
        original: `http://localhost:4000/${url}`,
        thumbnail: `http://localhost:4000/${url}`,
        originalWidth: 800,
        originalHeight: 600,
      }));
      setImages(newImages);
    };

    getProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ImageGallery
        items={images}
        startIndex={currentIndex}
        onSlide={onSlide}
        showIndex={true}
        showFullscreenButton={false}
        slideInterval={2000}
        slideOnThumbnailOver={true}
        autoPlay={true}
      />
    </div>
  );
};

export default ProductDetailImages;




