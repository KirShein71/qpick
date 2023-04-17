import React from 'react'
import {Link} from 'react-router-dom';
import {  useSelector } from 'react-redux';
import { selectCartItems } from '../redax/slices/cartSlice';

import CartEmpty from '../components/CartEmpty';
import CartCard from '../components/CartCard';




const Cart: React.FC = () => {
    
    const items = useSelector(selectCartItems)
    const totalPrice = items.reduce((items: number, obj: any)=>obj.price+items, 0)
    

    if (!totalPrice) {
        return <CartEmpty/>
    }
    
    
  return (
    <div className='cart'>  
        <div className='cart__title'>Корзина</div>
        <div className='cart__content'>
            <div>
                <div>
                    {items.map((item: any) => (
                    <CartCard {...item}/>
                    ))}
                </div>
            </div>
            <div className='cart-total'>
                <div className='cart-total__content'>
                    <div className='cart-total__text'>ИТОГО</div>
                    <div className='cart-total__price'>{totalPrice}$</div>
                </div>
                <button className='button__cart' >Перейти к оформлению</button>
            </div>
        </div>
    </div>
        
    
  )
}

export default Cart;
