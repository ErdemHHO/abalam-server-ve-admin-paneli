import React from 'react'
import {Link} from 'react-router-dom'
import { Container,Row,Col} from 'react-bootstrap';

function Menu() {
  return (
    <div className='p-1 text-center border-top d-sm-flex d-none'>
        <Container>
            <Row>
                <Col className="menu-button border-end fw-bolder">
                  <Link to='/urunler' className='link-without-underline'>KAMPANYALI ÜRÜNLER</Link>
                </Col>
                <Col className="menu-button border-end fw-bolder">
                    <Link to='/urunler' className='link-without-underline'> YENİ ÜRÜNLER</Link>
                </Col>
                <Col className="menu-button fw-bolder">
                    <Link to='/FAVORİLER' className='link-without-underline'> FAVORİ ÜRÜNLER</Link>     
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Menu