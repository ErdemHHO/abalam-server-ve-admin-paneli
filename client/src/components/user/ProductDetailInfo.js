import React , {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import * as api from '../../api/index'

import { FaWhatsapp} from 'react-icons/fa'
import { IoArrowForwardCircle} from 'react-icons/io5'

function ProductDetailInfo() {

  const { id } = useParams();
  const [product,setProduct]=useState();


  useEffect(()=>{

      const getProduct=async()=>{
        const response=await api.urunuGetir(id);
        setProduct(response.data.product[0]);
      }
      getProduct();
  },[])
  return (
    
    <div className='product-detail-info mt-3'>
        {!product ? (
            <h1>Ürün Yükleniyor</h1>
        ): (
            <div>
                <h3 className='text-center'>{product.title}</h3>
                <hr />
                <div className='features mt-3'>
                    <h4 className='text-danger'><strong>Ürün Özellikleri</strong>  </h4>

                    {product.description}

                    <ul>
                        <li>Kolay katlanabilme özelliği</li>
                        <li>3 kademeli ayarlanabilir yükseklik özelliği</li>
                        <li>Hareket kabiliyeti yüksek tekerler</li>
                        <li>Müzikli ve oyuncaklı üst tabla</li>
                        <li>Alt tablada bulunan fren sistemi</li>
                        <li>16 kilograma kadar taşıma kapasitesi</li>
                    </ul>
                    <div>
                        <span className="price"> <del className='text-danger'>{product.old_price} ₺</del>
                        <span className='text-success price'>{product.price} ₺</span> </span>
                    </div>
                    <div className='product-detail-info-buttons mt-5'>
                        <a href="#" className="whatsappButton button m-1"><FaWhatsapp size={32}   className='icon '/> WhatsApp İle Sipariş </a>
                    </div>
                    

                </div>
            </div>
        )}
    </div>
  )
}

export default ProductDetailInfo