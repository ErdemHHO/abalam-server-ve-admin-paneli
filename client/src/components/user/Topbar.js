import React,{useEffect,useState} from 'react'

import {Container,Row,Col} from 'react-bootstrap';
import { FaWhatsapp,FaFacebookF,FaInstagram,FaTwitter } from 'react-icons/fa'
import { TbMailForward } from 'react-icons/tb'
import { BsTelephoneForwardFill } from 'react-icons/bs'



function Topbar() {
    
  return (
    <div className='top-bar pt-2 px-3'>
        <Container fluid>
        <Row>
            <Col className='text-start' >
                <Row>
                    <Col className='d-none d-xl-flex'>
                        <TbMailForward className='icon'/><span className=' mail-icon'>info@abalamturkiye.com</span> 
                    </Col>
                    <Col>
                        <BsTelephoneForwardFill className='phone-icon icon'/><span>+90 538 826 54 36</span> 
                    </Col>
                </Row>
  
            </Col>
            <Col className='text-end '>
                <FaWhatsapp className='whatsapp icon '/>
                <FaFacebookF className='facebook icon '/>
                <FaTwitter className='twitter icon '/>
                <FaInstagram className='instagram icon '/>
            </Col>
        </Row>
        </Container>
        <br />
        <br />
        <br />
    </div>
  );
}

export default Topbar; 