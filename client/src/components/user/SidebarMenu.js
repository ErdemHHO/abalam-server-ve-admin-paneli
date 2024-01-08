import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import * as api from '../../api/index'

import {ListGroup } from 'react-bootstrap'

function SidebarMenu() {

  const [categories,setCategories]=useState();

  useEffect(()=>{

    const getCategories = async()=>{
      const response= await api.kategorileriGetir();
      setCategories(response.data.categories);
    }
    getCategories();
  },[])

  return (
    <div>
        <ListGroup className='text-center mx-5'>
            {categories && categories.map((item)=>(
              <Link className='link-without-underline' key={item._id} to={`/urunler/${item.slug}`}  >
                 <ListGroup.Item className='list-item'><span className='fw-bold'>{item.name}</span> </ListGroup.Item>
              </Link>
            ))}
            <Link className='link-without-underline' to={"/kampanyali-urunler"} >
              <ListGroup.Item className='list-item'><span className='fw-bold'>Kampanyalı Ürünler</span> </ListGroup.Item>
            </Link>
            <Link className='link-without-underline' to={"/favori-urunler"} >
              <ListGroup.Item className='list-item'><span className='fw-bold'>Favori Ürünler</span> </ListGroup.Item>
            </Link>
            <Link className='link-without-underline' to={"/yeni-urunler"} >
              <ListGroup.Item className='list-item'><span className='fw-bold'>Yeni Ürünler</span> </ListGroup.Item>
            </Link>
            
        </ListGroup>
        <div className='sidebarLogos'>
          <img src="/images/Yerli_uretim_logosu.png" alt="Logo" className='sidebarLogo'/>
          <img src="/images/2-yil-garanti.png" alt="Logo" className='sidebarLogo'/>
          <img src="/images/kargo-bedava.png" alt="Logo" className='sidebarLogo'/>
          <img src="/images/kapida-odeme.png" alt="Logo" className='sidebarLogo'/>
        </div>

        
    </div>

  )
}

export default SidebarMenu