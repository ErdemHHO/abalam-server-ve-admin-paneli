import React, {useState,useEffect} from 'react'
import * as api from '../../api/index'
import {Link,useParams} from 'react-router-dom'
import {Container,Row,Col} from 'react-bootstrap'
import { FaWhatsapp} from 'react-icons/fa'
import { IoArrowForwardCircle} from 'react-icons/io5'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




function Products() {

  const [products,setProducts]=useState();
  const { id } = useParams();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const response = await api.kategoriGetir(id);
          setProducts(response.data.product);
        } else {
          setProducts([]);
        }
      } catch (error) {
        if (error.response) {
          setProducts([]);
          toast.error(error.response.data.message, {
            position: toast.POSITION.TOP_CENTER, 
            autoClose: 2000, 
          });
        } else {
          toast.info('İstek gönderilirken bir hata oluştu: ' + error.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000, 
          });
        }
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className='d-flex justify-content-center text-center'>
      <Container>
        <Row>
        

          {products && 
            products.map((item)=>(
            <Col key={item._id} >
            <div className='parts__container'>
              <div className="box">
                      <img src={`http://localhost:4000/${item.image_urls[0]}`} alt={item.slug}/>
                  <h3 > {item.name }</h3>
                  <span className="price"> <del className='text-danger'> {item.old_price} ₺</del><span className='text-success'>{item.price} ₺</span> </span>
                  <div className="buttons">
                      <a href="#" className="whatsappButton button m-1"><FaWhatsapp size={16}   className='icon '/> WhatsApp</a>
                      <Link to={`/urun/${item.slug}`} >
                        <a className="detailsButton button m-1"><IoArrowForwardCircle size={16}   className='icon '/> Detay</a>
                      </Link>
                      
                  </div>		
            </div>      
          </div>
            </Col>
          ))}
    

              <ToastContainer limit={1}/>
        </Row>
      </Container>
    </div>
  )
}

export default Products