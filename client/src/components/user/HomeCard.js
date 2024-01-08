import React from 'react'
import {Link} from 'react-router-dom'
import { Container,Row,Col} from 'react-bootstrap';

function HomeCard() {
  return (
    <div className='background-foto'>
      <Container >
        <Row >
          <Col>
            <Link to='/urunler'>
              <div className='cards card1'>
                  <img src="/images/logo/download-12.png" className="home-card-foto" />
              </div>
            </Link>
          </Col>
          <Col>
            <Link to='/urunler'>
              <div className='cards card2'>
                <img src="/images/logo/download-13.png" className="home-card-foto" />
              </div>
            </Link>
          </Col>
          <Col> 
            <Link to='/urunler'>
              <div className='cards card3'>
                <img src="/images/logo/download-12.png" className="home-card-foto" />
              </div>
            </Link>
          </Col>
          <Col>
            <Link to='/urunler'>
              <div className='cards card4'>
                <img src="/images/logo/download-13.png" className="home-card-foto" />
              </div>
            </Link>
          </Col>


        </Row>
      </Container>
    </div>
  )
}

export default HomeCard