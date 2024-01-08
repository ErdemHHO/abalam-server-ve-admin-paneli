import React from 'react'
import ProductCard from './ProductCard'
import { Container,Row,Col} from 'react-bootstrap'
function FavoriteProducts() {
  return (
    <div className='mt-5 justify-content-center text-center parts__container'>
        <Container fluid>
            <h1 className='h1'>FAVORİLER</h1>
            <Row> 
                <Col>
                    <ProductCard />
                </Col>
                <Col>
                    <ProductCard />
                </Col>
                <Col>
                    <ProductCard />
                </Col>
                <Col>
                    <ProductCard />
                </Col>
            </Row>
        </Container >
    </div>
  )
}

export default FavoriteProducts