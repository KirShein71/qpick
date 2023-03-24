import React from 'react'
import Sceleton from '../components/Sceleton';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redax/slices/categorySlice';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context';
import qs from 'qs';
import { fetchGoods } from '../redax/slices/goodsSlice';


function Home()  {
    
    const {searchValue} = React.useContext(AppContext)
    const {onAddToFavorite} = React.useContext(AppContext)
    const {onAddToCart} = React.useContext(AppContext)
    const categoryId = useSelector((state)=>state.category.categoryId)
    const sortType = useSelector((state) => state.sort.sort.sortProperty)
    const {items, status} = useSelector((state) => state.goods)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isMounted = React.useRef(false)
    
    const onClickCategory = (id) => {
        dispatch(setCategoryId(id));
    }

 

    React.useEffect(()=> {
        
        const sortBy = sortType.replace('-', '');
        const order = sortType.includes('-') ? 'asc' : 'desc';
        const search = searchValue ? `search=${searchValue}` : '';
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const axiosData = async () => {
            dispatch(fetchGoods({
                sortBy,
                order,
                search,
                category
            }))
        }
            axiosData()
            window.scrollTo(0,0);
    }, [searchValue, categoryId, sortType])

    React.useEffect(()=>{
        if (isMounted.current) {
            const  queryString = qs.stringify({
                categoryId,
                sortType,   
            })
            navigate(`?${queryString}`);
        }
        isMounted.current = true;
    },[categoryId, sortType])
    
        


  return (
    <>
        <Banner/>
        <div className='content'>
            <div className='content__title'>Товары</div>
            <div className='content__top'>
                <Categories value={categoryId} onClickCategory={onClickCategory}/>
                <Sort/>
            </div>
            <div className='content__items'>
            {status === 'loading'
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
