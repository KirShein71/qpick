import React from 'react'
import Sceleton from '../components/Sceleton';
import Banner from '../components/Banner';
import Card from '../components/Card';
import AppContext from '../context';


function Home()  {
    const {isLoading, setIsLoading} = React.useContext(AppContext)
    const {items} = React.useContext(AppContext)
    const {onAddToFavorite} = React.useContext(AppContext)
    const {onAddToCart} = React.useContext(AppContext)
        


  return (
    <>
        <Banner/>
        <div className='content'>
            <div className='content__title'>Товары</div>
            <div className='content__items'>
            {isLoading 
                    ? [...new Array(6)].map((_, index) => <Sceleton key={index}/>)
                    : items.map((obj) =>
                    (<Card 
                    key={obj.id} {...obj}
                    onFavorite={(obj) => onAddToFavorite(obj)}
                    onPlus={(obj) => onAddToCart(obj)}
                    />))}
            </div>
        </div> 
    </>
  )
};

export default Home;
