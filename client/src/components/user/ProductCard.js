import React from 'react'


import { FaWhatsapp} from 'react-icons/fa'
import { IoArrowForwardCircle} from 'react-icons/io5'
function ProductCard() {
  return (
    <div className='parts__container'>
      <div className="box">
              <img src="/images/logo/download-12.png"/>
          <h3 >Bebek Arabası 1</h3>
          <span className="price"> <del className='text-danger'> 7000 ₺</del><span className='text-success'>5000 ₺</span> </span>
          <div className="buttons">
              <a href="#" className="whatsappButton button m-1"><FaWhatsapp size={16}   className='icon '/> WhatsApp</a>
              <a href="parca1.html" className="detailsButton button m-1"><IoArrowForwardCircle size={16}   className='icon '/> Detay</a>
          </div>		
      </div>      
    </div>

  )
}

export default ProductCard