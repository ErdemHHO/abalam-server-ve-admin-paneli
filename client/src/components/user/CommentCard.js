import React from 'react'
import { IoPersonCircle } from 'react-icons/io5'
import { ImQuotesRight } from 'react-icons/im'
import { Col, Container, Row } from 'react-bootstrap'

function CommentCard() {
  return (
    <div className="comment-card justify-content-center">
        <Container>
            <Row>
                <Col>
                    <IoPersonCircle size={100} style={{ color: '#F08D03' }} className='comment-icon'/>
                </Col>
                <Col>
                    <ImQuotesRight size={50} style={{ color:'#018825' }} className='comment-icon2'/>
                </Col>
            </Row>
        </Container>
        <h3 className='comment-title'>A** Se*** Kan***</h3>
        <div className="comment-card-text">
            Bu yorumu okuyan herkes şunu bilsin ki, Bebegold çok iyi bir marka piyasada ki basit markaların 
        </div>		
    </div>
  )
}

export default CommentCard