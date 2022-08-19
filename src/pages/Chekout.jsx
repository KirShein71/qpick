import React from 'react'
import {Link} from 'react-router-dom'
import AppContext from '../context'



function Chekout () {
    const {carts} = React.useContext(AppContext)
    const totalPrice = carts.reduce((prev, obj)=>obj.price+prev, 15)
   
  return (
    <div className='chekout'>
        <div className='container'>
            <div className='chekout__title'>Оформление заказа</div>
            <div className='chekout__content'>
                <div className='chekout-card'>
                    <div className='chekout-card__delivery'>
                        <div className='chekout-card__title'>Доставка курьером</div>
                        <div className='chekout-card__price'>15$</div>
                    </div>
                    <div className='chekout-card__image'>
                        <img width={400} height={146} src='./img/chekout__cart.svg' alt='image' />
                    </div>
                    <div className='chekout-card__subtitle'>Адрес доставки</div>
                    <form>
                        <input className='chekout-card__city' name="name" required placeholder='Город' type="text" />
                        <input className='chekout-card__street' name="street" required placeholder='Улица' type="text"/>
                        <input className='chekout-card__home' name="home" required placeholder='Дом' type="text"/>
                        <input className='chekout-card__entrance' name="entrance" required placeholder='Подъед' type="text"/>
                        <input className='chekout-card__flat' name="flat" required placeholder='Квартира' type="text"/>
                    </form>
                </div>
                <div className='chekout-items'>
                    <div className='chekout-items__order'>
                        <div className='chekout-items__order-title'>Ваш заказ</div>
                  
                        {carts.map((obj) => (
                        <div className='chekout-items__order-content'>
                                <div className='chekout-items__order-subtitle'>{obj.title}</div>
                                 <div className='chekout-items__order-price'>{obj.price}$</div>
                        </div>
                        ))}
                     
                        <div className='chekout-items__order-content'>
                            <div className='chekout-items__order-subtitle'>Доставка</div>
                            <div className='chekout-items__order-price'>15$</div>
                        </div>
                        <div className='chekout-items__order-content'>
                            <div className='chekout-items__order-subtitle'>К оплате</div>
                            <div className='chekout-items__order-price'>{totalPrice}$</div>
                        </div>
                    </div>
                    <div className='chekout-items__payment'>
                        <div className='chekout-items__payment-title'>Способ оплаты</div>
                        <div className='chekout-items__payment-content'>
                            <img width={17} height={16} src='./img/visa_payment.svg' alt='visa'/>
                            <p>Счет на kaspi.kz</p>
                        </div>
                        <div className='chekout-items__payment-content'>
                            <img width={17} height={16} src='./img/promokod.svg' alt='promocode'/>
                            <p>Есть промокод?</p>
                        </div>
                    </div>
                    <div className='chekout-items__contact'>
                        <div className='chekout-items__contact-title'>Номер получателя</div>
                        <input className='chekout-items__contact-tell' name='phone' required placeholder='Номер телефона'/>
                    </div>
                    <Link to='/framed'>
                        <button className='button__chekout'>Закончить оформление</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chekout;