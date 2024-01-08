import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import { FaWhatsapp,FaFacebookF,FaInstagram,FaTwitter } from 'react-icons/fa'
import { SiSahibinden } from 'react-icons/si'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div >
        <Container fluid className='text-center footer bg-footer p-5 text-white footer mt-5'>
            <Row>
                <Col md={6} className='mb-3'>
                    <img src="/images/logo/abalam-logo2.png" alt="Logo" className='logoFooter'/>
                    <div className='text-primary'>
                      <FaWhatsapp size={32}   className='icon whatsapp'/> {'   '}
                      <FaFacebookF size={32}  className='icon facebook'/> {'   '}
                      <FaInstagram size={32}  className='icon instagram'/> {'   '}
                      <FaTwitter size={32}   className='twitter icon '/>
                    </div>
                </Col>
                
                <Col className='text-center' md={2}>
                    <h4>Kurumsal</h4>
                    <hr />
                    <ul>
                        <Link className='link-without-underline' to={'/hakkimizda'}>
                        <li>
                            Hakkımızda
                        </li>
                        </Link>
                        <Link className='link-without-underline'  to={'/itetisim'}>
                        <li>
                            İletişim
                        </li>
                        </Link>
                        <Link className='link-without-underline'  to={'/hakkimizda'}>
                        <li>
                            Vizyon
                        </li>
                        </Link>
                    </ul>
                </Col >
                <Col className='text-center' md={2}>
                    <h4>TESLİMAT & İADE</h4>
                    <hr />
                    <ul>
                        <li>
                            Teslimat Bilgileri
                        </li>
                        <li>
                            İade & Değişim
                        </li>
                        <li>
                            Mesafeli Satış Sözleşmesi
                        </li>
                    </ul>
                </Col>
                <Col className='text-center' md={2}>
                    <h4>Admin</h4>
                    <hr />
                    <ul>
                        <li>
                            Admin Girişi
                        </li>
                    </ul>
                </Col>
            </Row>
            <hr />
            Designed By |
            <span className='Designed-By'> Erdem Hacıhasanoğlu</span>  |
            <span className='Designed-By2'> Berkan Filiz</span> 
        </Container>
    </div>
  )
}

export default Footer