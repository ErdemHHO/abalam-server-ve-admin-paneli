import React, { useState, useEffect } from 'react';
import * as api from '../../api/index';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { IoArrowForwardCircle } from 'react-icons/io5';

function Products() {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q');

  console.log(products);

  useEffect(() => {
    const getSearchProducts = async () => {
      const response = await api.urunBul(query);
      setProducts(response.data.products);
    }
    getSearchProducts();
  }, [query]);

  return (
    <div className='d-flex justify-content-center text-center'>
      <Container>
        <Row>
          {products.length > 0 ? (
            <>
              <h3>{products.length} tane ürün bulundu.</h3>
              {products.map((item) => (
                <Col key={item._id}>
                  <div className='parts__container'>
                    <div className='box'>
                      <img
                        src={`http://localhost:4000/${item.image_urls[0]}`}
                        alt={item.slug}
                      />
                      <h3>{item.name}</h3>
                      <span className='price'>
                        <del className='text-danger'>{item.old_price} ₺</del>
                        <span className='text-success'>{item.price} ₺</span>
                      </span>
                      <div className='buttons'>
                        <a href='#' className='whatsappButton button m-1'>
                          <FaWhatsapp size={16} className='icon' /> WhatsApp
                        </a>
                        <Link to={`/urun/${item.slug}`}>
                          <a className='detailsButton button m-1'>
                            <IoArrowForwardCircle
                              size={16}
                              className='icon'
                            />{' '}
                            Detay
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </>
          ) : (
            <h3>Ürün bulunamadı.</h3>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Products;
