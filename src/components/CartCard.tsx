import React from 'react'
import { removeItem} from '../redax/slices/cartSlice';
import { useDispatch} from 'react-redux';


type CartProps = {
    id: string;
    imageUrl: string;
    title: string;
    price: number;
   
}

const CartCard: React.FC<CartProps> = ({imageUrl, title, id, price}) => {
    const dispatch = useDispatch()
    const onClickRemove = () => {
        if (window.confirm("Вы действительно хотите удалить товар")) {
            dispatch(removeItem(id));
        }
    }
  return (
    <div className='cart-card'>
        <div className='cart-card__icons'  >
            <img src='./img/delete.svg' alt='delete' onClick={onClickRemove}/>
        </div>
        <div className='cart-card__content'>
            <div className='cart-card__image'>
                <img width={136} height={146} src={imageUrl} alt='pods' />
            </div>
            <div className='cart-card__pricetag'>
                <div className='cart-card__title'>{title}</div>
                <div className='cart-card__price'>{price}$</div>
            </div>
        </div>
    </div>
  )
}

export default CartCard