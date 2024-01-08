import React from 'react'

import Topbar from '../../components/user/Topbar'
import Header from '../../components/user/Header'
import Footer from '../../components/user/Footer'
import NavigationBar from '../../components/user/NavigationBar'
import SidebarMenu from '../../components/user/SidebarMenu'
import Products from '../../components/user/Products'


import {Container,Row,Col} from 'react-bootstrap';

import '../../stylesheet/index.css'; 





function ProductPage() {
  return (
    <div>
      <Topbar />
      <Header />
      <div className='icerik'>
        <NavigationBar />
        <Container fluid className='mt-5'>
          <Row>
            <Col lg={4}>
              <SidebarMenu />
            </Col>
            <Col lg={8}>
              <Products />
            </Col>

          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default ProductPage