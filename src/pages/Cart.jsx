import React from 'react'
import {Link} from 'react-router-dom';
import AppContext from '../context';



function Cart ({onRemove} )  {
    const {carts} = React.useContext(AppContext)
    const totalPrice = carts.reduce((prev, obj)=>obj.price+prev, 15)
    
    
  return (
    <div className='cart'>
        {
            carts.length > 0 ? (
    <div>
        <div className='cart__title'>Корзина</div>
        <div className='cart__content'>
            <div>
                <div>
                    {carts.map((obj) => (
                    <div className='cart-card'>
                        <div className='cart-card__icons' onClick={() => onRemove(obj.id)}  >
                            <img src='./img/delete.svg' alt='delete' />
                        </div>
                        <div className='cart-card__content'>
                            <div className='cart-card__image'>
                                <img width={136} height={146} src={obj.imageUrl} alt='pods' />
                            </div>
                            <div className='cart-card__pricetag'>
                                <div className='cart-card__title'>{obj.title}</div>
                                <div className='cart-card__price'>{obj.price}$</div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <div className='cart-delivery'>
                    <div className='cart-delivery__card'>
                        <div className='cart-delivery__title'>Доставка</div>
                        <div className='cart-delivery__image'>
                        <img width={584} height={173} src='./img/karta.svg' alt='karta' />
                        </div>
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
        ) :
        
        ( 
        <div className='cart-empty'>
            <div className='cart-empty__content'>
                <div className='cart-empty__image'>
                    <img width={409} height={315} src='./img/cart_empty.svg' alt='cart_empty' />
                </div>
                <div className='cart-empty__title'>Корзина пуста</div>
                <div className='cart-empty__subtitle'>Но это никогда не поздно исправить :)</div>
                <Link to='/'>
                    <button className='button__empty'>В каталог товаров</button>
                </Link>
            </div>
        </div>
         )}
    </div>
  )
}

export default Cart;
