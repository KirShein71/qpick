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
import axios from 'axios';
import qs from 'qs';


function Home()  {
    const [items, setItems] = React.useState ([])
    const [isLoading, setIsLoading] = React.useState(true) 
    const {searchValue} = React.useContext(AppContext)
    const {onAddToFavorite} = React.useContext(AppContext)
    const {onAddToCart} = React.useContext(AppContext)
    const categoryId = useSelector((state)=>state.category.categoryId)
    const sortType = useSelector((state) => state.sort.sort.sortProperty)
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
            try {
                const res = await axios.get(`https://62f4d568535c0c50e7634e7f.mockapi.io/items?&${search}${category}&sortBy=${sortBy}&order=${order}`)
                setIsLoading(false);    
                setItems(res.data);
                } catch {
                    alert('error')
                };
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
