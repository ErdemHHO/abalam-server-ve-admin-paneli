import React from 'react'
import ProductDetailImages from '../../components/user/ProductDetailImages'
import Topbar from '../../components/user/Topbar'
import Header from '../../components/user/Header'
import NavigationBar from '../../components/user/NavigationBar'
import ProductDetailInfo from '../../components/user/ProductDetailInfo'
import SimilarProductsSlider from '../../components/user/SimilarProductsSlider'
import Footer from '../../components/user/Footer'

import { Col, Container,Row } from 'react-bootstrap'

import '../../stylesheet/index.css'; 


function ProductDetailPage() {
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
        


        <SimilarProductsSlider />
        
        <Container>

                <div className='productDetailsLogos mt-5'>
                <img src="/images/Yerli_uretim_logosu.png" alt="Logo" className='sidebarLogo'/>
                <img src="/images/2-yil-garanti.png" alt="Logo" className='sidebarLogo'/>
                <img src="/images/kargo-bedava.png" alt="Logo" className='sidebarLogo'/>
                <img src="/images/kapida-odeme.png" alt="Logo" className='sidebarLogo'/>
                </div>

        </Container>

        <Footer />
    </div>
  )
}

export default ProductDetailPage


