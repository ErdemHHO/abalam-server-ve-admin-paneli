import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Topbar from '../../components/user/Topbar'
import Header from '../../components/user/Header'
import NavigationBar from '../../components/user/NavigationBar'
import ProductDetailImages from '../../components/user/ProductDetailImages'
import ProductDetailInfo from '../../components/user/ProductDetailInfo'
import Footer from '../../components/user/Footer'


import '../../stylesheet/index.css'; 

function About() {
  return (
    <div>
        <Topbar />
        <Header />
        <div className='icerik'>
            <NavigationBar />
            <Container className='mt-5'>
                <Row>
                    <Col xl={6}>
                    <ProductDetailImages />
                    </Col>
                    <Col xl={6}>
                    <ProductDetailInfo />
                    </Col>
                </Row>
            </Container>
        </div>
        <Footer />
    </div>
  )
}

export default About