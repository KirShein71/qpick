import React from 'react'

import Banner from '../components/Banner';
import Card from '../components/Card';
import AppContext from '../context';


function Home()  {
    const {items} = React.useContext(AppContext)
    const {onAddToFavorite} = React.useContext(AppContext)
    const {onAddToCart} = React.useContext(AppContext)
        


  return (
    <>
        <Banner/>
        <div className='content'>
            <div className='content__title'>Товары</div>
            <div className='content__items'>
                {items.map((obj) => (
                    <Card {...obj}
                        onFavorite={(obj) => onAddToFavorite(obj)}
                        onPlus={(obj) => onAddToCart(obj)}
                    /> 
                )) }
            </div>
        </div> 
    </>
  )
};

export default Home;
