
import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/user/Home';
import ProductPage from './pages/user/ProductPage';
import ProductDetailPage from './pages/user/ProductDetailPage';
import ProductPageSearch from './pages/user/ProductPageSearch';
import ProductCategoryPage from './pages/user/ProductCategoryPage';
import About from './pages/user/About';
import Contact from './pages/user/Contact';

import Admin from './pages/admin/Admin';
import SigninPage from './pages/admin/signin/SigninPage';


function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}



function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/urunler" element={<ProductPage />} /> 
        <Route path="/urunler/:id" element={<ProductCategoryPage/>}/>     
        <Route path="/urun/:id" element={<ProductDetailPage/>}/>
        <Route path="/urunler/search" element={<ProductPageSearch />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/iletisim" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
