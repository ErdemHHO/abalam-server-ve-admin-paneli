import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Topbar from '../../components/user/Topbar'
import Header from '../../components/user/Header'
import ContactMenu from '../../components/user/ContactMenu'

import Footer from '../../components/user/Footer'

import '../../stylesheet/index.css'; 


function Contact() {
  return (
    <div>
        <Topbar />
        <Header />
        <div className='icerik'>
            <h1 className='text-center fw-bold'>BİZE ULAŞIN</h1>
            <ContactMenu />
        </div>
        <Footer />
    </div>
  )
}

export default Contact