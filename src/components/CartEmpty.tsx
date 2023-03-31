import React from "react";
import { Link } from "react-router-dom";

const CartEmpty: React.FC = () => {
    return (
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
    )
}

export default CartEmpty;