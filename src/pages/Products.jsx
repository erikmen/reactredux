import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/Button';
import Modal from '../components/Modal';
import Input from '../components/Input'
import ProductCard from '../components/ProductCard';
import { createDataFunc } from '../redux/dataSlice';
import { modalFunc } from '../redux/modalSlice';


const Products = () => {
  const {modal} = useSelector(state => state.modal);
  const {data} = useSelector(state => state.data);
  
  const dispatch = useDispatch();
  const buttonFunc = () =>{
     dispatch(createDataFunc(productInfo))
     dispatch(modalFunc());
}
  
  const [productInfo, setProductInfo] = useState({name:"", price:"", url:""})
    
  const onChangeFunc = (e, type) => {
        if (type == "url") {
            setProductInfo(prev => ({...prev, [e.target.name]: URL.createObjectURL(e.target.files[0])}))
        }else{
            setProductInfo(prev => ({...prev, [e.target.name]: e.target.value}))
        }
    }

  const contentModal = (
    <div>
      <Input type={"text"} name={"name"} onChange={e => onChangeFunc(e, "name")} id={"name"} placeholder={'Ürün Ekle'}/>
      <Input type={"text"} name={"price"} onChange={e => onChangeFunc(e, "price")} id={"price"} placeholder={'Fiyat Ekle'}/>
      <Input type={"file"} name={"url"} onChange={e => onChangeFunc(e, "file")} id={"url"} placeholder={'Resim Seç'}/>
      <Button btnText={"Oluştur"} onClick={buttonFunc} />
    </div>
  )



 
  
  return (
    <div >
      <div className='flex items-center flex-wrap'>{
          data?.map((dt,i) =>(
            <ProductCard key={i} dt={dt}/>
          ))
        }</div>
        
        {modal && <Modal content={contentModal} title={"Ürün Oluştur"} />}
    </div>
  )
}

export default Products 