import axios from "axios";

const url1 = "/api/category";
const url2 = "/api/product";
const url3 = "/api/products";


export const kategorileriGetir = () => axios.get(url1);
export const kategoriGetir = (id) => axios.get(`${url1}/${id}`);

// export const kategoriOlustur=(newCategory)=>axios.post(url,newCategory)

export const urunleriGetir = () => axios.get(url2);
export const urunuGetir=(id)=>axios.get(`${url2}/${id}`);

export const urunBul = (query) => {
    return axios.get(`${url2}/search`, {
      params: { q: query },
    });
  };


export const adminGirisYap=(formData)=>axios.post('/api/admin/signin',formData);