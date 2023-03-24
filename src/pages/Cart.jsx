import React from 'react'
import {Link} from 'react-router-dom';
import AppContext from '../context';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../redax/slices/cartSlice';
import CartEmpty from '../components/CartEmpty';



function Cart ({id} )  {
    const {carts} = React.useContext(AppContext)
    const totalPrice = carts.reduce((items, obj)=>obj.price+items, 15)
    const items = useSelector((state) => state.cart.items)
    const dispatch = useDispatch()

    const onClickRemove = () => {
        if (window.confirm("Вы действительно хотите удалить товар")) {
            dispatch(removeItem(items));
        }
    }

    if (!items) {
        return <CartEmpty/>
    }
    
    
  return (
    <div className='cart'>  
        <div className='cart__title'>Корзина</div>
        <div className='cart__content'>
            <div>
                <div>
                    {items.map((item) => (
                    <div className='cart-card'>
                        <div className='cart-card__icons'  >
                            <img src='./img/delete.svg' alt='delete' onClick={onClickRemove}/>
                        </div>
                        <div className='cart-card__content'>
                            <div className='cart-card__image'>
                                <img width={136} height={146} src={item.imageUrl} alt='pods' />
                            </div>
                            <div className='cart-card__pricetag'>
                                <div className='cart-card__title'>{item.title}</div>
                                <div className='cart-card__price'>{item.price}$</div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <div className='cart-delivery'>
                    <div className='cart-delivery__card'>
                        <div className='cart-delivery__title'>Способ получения</div>
                        <div className='cart-delivery__bottom'>
                            <div className='cart-delivery__bottom-title'>Доставка курьером</div> 
                            <div className='cart-delivery__bottom-price'>15$</div> 
                        </div>
                    </div>
                </div>
            </div>
            <div className='cart-total'>
                <div className='cart-total__content'>
                    <div className='cart-total__text'>ИТОГО</div>
                    
                    <div className='cart-total__price'>{totalPrice}$</div>
                   
                </div>
                <Link to="/chekout">
                    <button className='button__cart' >Перейти к оформлению</button>
                </Link>
            </div>
        </div>
    </div>
        
    
  )
}

export default Cart;
