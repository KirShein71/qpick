import React from 'react'
import { Link } from 'react-router-dom';
import AppContext from '../context';

import Card from '../components/Card'

function  Favorite ()  {

    const {favorites} = React.useContext(AppContext)
    const {onAddToFavorite} = React.useContext(AppContext)
    const {onAddToCart} = React.useContext(AppContext)

  return (
    <>
        <div className='favorite'>
            {
                favorites.length > 0 ? (
            <div>
                <div className='favorite__title'>Избранное</div>
                    <div className='favorite__content'>
                        {favorites.map((obj)=> (
                            <Card{...obj}
                                favorited={true}
                                onFavorite={onAddToFavorite}
                                onPlus={(obj) => onAddToCart(obj)}
                            />
                        ))}
                </div>
            </div> ) : (
            <div className='favorite-empty'>
                <div className='favorite-empty__image'>
                    <img width={70} height={70} src='./img/smile.svg' alt='sadsmaile' /> 
                </div>
                <div className='favorite-empty__title'>Закладок нет :(</div>
                <div className='favorite-empty__subtitle'>Вы ничего не добавляли в закладки</div>
                <Link to='/'>
                    <button className='button__empty'>В каталог товаров</button>
                </Link>
            </div>
            )
            }
        </div>
    </>
  )
}

export default Favorite;
