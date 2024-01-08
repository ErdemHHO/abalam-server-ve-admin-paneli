import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import { AiFillHome } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'


function NavigationBar() {
  return (
    <div>    
        <div className='navigationBar p-1 border-top text-center'>
            <Container>
                <AiFillHome size={32} />
                <BsArrowRight size={32}/>
                <span className='fw-bold'>  Ürünlerimiz  </span>
                <BsArrowRight size={32}/>
                <span className='fw-bold'>  Bebek Arabaları  </span>
            </Container>
        </div>
    </div>
  )
}

export default NavigationBar