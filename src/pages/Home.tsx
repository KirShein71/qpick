import React from 'react'
import Sceleton from '../components/Sceleton';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import { useSelector } from 'react-redux';
import { selectCategory, setCategoryId } from '../redax/slices/categorySlice';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context';
import qs from 'qs';
import { fetchGoods, selectGoods } from '../redax/slices/goodsSlice';
import { selectSortType } from '../redax/slices/sortSlice';
import { useAppDispatch } from '../redax/store';


const Home: React.FC = () => {
    
    const {searchValue}: any = React.useContext(AppContext)
    const {onAddToFavorite}: any = React.useContext(AppContext)
    const categoryId = useSelector(selectCategory)
    const sortType = useSelector(selectSortType)
    const {items, status} = useSelector(selectGoods)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const isMounted = React.useRef(false)
    
    const onClickCategory = (id: number) => {
        dispatch(setCategoryId(id));
    }

 

    React.useEffect(()=> {
        
        const sortBy = sortType.replace('-', '');
        const order = sortType.includes('-') ? 'asc' : 'desc';
        const search = searchValue ? `search=${searchValue}` : '';
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const axiosData = async () => {
            dispatch(
                fetchGoods({
                sortBy,
                order,
                search,
                category
            }))
        }
            axiosData();
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
                    : items.map((obj: any) =>
                    (<Card 
                    key={obj.id} {...obj}
                    onFavorite={(obj: any) => onAddToFavorite(obj)}
                    />))}
            </div>
        </div> 
    </>
  )
};

export default Home;
