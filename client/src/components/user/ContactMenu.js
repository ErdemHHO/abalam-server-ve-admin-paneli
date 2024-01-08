import React from 'react'
import {Form,Button} from 'react-bootstrap'

import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdAttachEmail,MdLocationCity } from 'react-icons/md'

function ContactMenu() {
  return (
    <div>
        <div class="contact wow fadeInUp">
                <div class="container">
                    <div class="section-header text-center">
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="contact-info">
                                <div class="contact-item">
                                    <MdLocationCity size={100} className='contact-icon'/>
                                    <div class="contact-text">
                                        <h2>Adres</h2>
                                        <p>
                                        Esentepe, Küçük Sanayi Sitesi 2950. Sk., 34265 Sultangazi/İstanbul
                                        </p>
                                    </div>
                                </div>
                                <div class="contact-item">
                                    <BsFillTelephoneFill size={60} className='contact-icon'/>
                                    <div class="contact-text">
                                        <h2>Telefon</h2>
                                        <p>+90 538 826 54 36</p>
                                    </div>
                                </div>
                                <div class="contact-item">
                                    <MdAttachEmail size={60} className='contact-icon'/>
                                    <div class="contact-text">
                                        <h2>Email</h2>
                                        <p>abalamturkiye@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="contact-form">
                                <div id="success"></div>
                                <Form name="sentMessage" id="contactForm" novalidate="novalidate">
                                    <div class="control-group">
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="text" placeholder="Adınız" />
                                        </Form.Group>
                                    </div>
                                    <div class="control-group">
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Mail Adresiniz" />
                                        </Form.Group>
                                    </div>
                                    <div class="control-group">
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="text" placeholder="Konu" />
                                        </Form.Group>
                                    </div>
                                    <div class="control-group">
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            
                                        <Form.Control as="textarea" aria-label="With textarea"  placeholder="Mesajınız" />

                                        </Form.Group>
                                    </div>
                                    <div>
                                        <Button class="btn" type="submit" id="sendMessageButton">Mesaj Gönder</Button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div className='d-flex justify-content-center p-5'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.833060396401!2d28.879866900000003!3d41.094494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab034de6799df%3A0x1105229c59b8e483!2s%C3%9Cnal%20Bisiklet!5e0!3m2!1str!2str!4v1684359590698!5m2!1str!2str" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

    </div>
  )
}

export default ContactMenu