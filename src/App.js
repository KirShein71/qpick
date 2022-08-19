import React from 'react';
import {Routes, Route,} from "react-router-dom";
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Condition from './pages/Сondition';
import Contact from './pages/Contact';
import Favorite from './pages/Favorite';
import Cart from './pages/Cart'
import Chekout from './pages/Chekout';
import Framed from './pages/Framed';
import AppContext from './context';

import './scss/app.scss';




function App() {
    const [carts, setCarts] = React.useState([])
    const [favorites, setFavorites] = React.useState([])
    const [items, setItems] = React.useState ([])

    
    React.useEffect(() => {
        axios.get('https://62f4d5deac59075124c4e860.mockapi.io/items').then((res) => {
            setItems(res.data);
        });
        axios.get('https://62f4d5deac59075124c4e860.mockapi.io/favorites').then((res) => {
            setFavorites(res.data);
        });
        axios.get('https://62f4d5deac59075124c4e860.mockapi.io/cart').then((res) => {
            setCarts(res.data);
        });
        
    }, []);

    const onAddToFavorite = (obj) => {
        if (favorites.find((favObj) => favObj.id == obj.id)) {
            axios.delete(`/https://62f4d5deac59075124c4e860.mockapi.io/favorites/${obj.id}`);
            setFavorites((prev) => prev.filter((items) => items.id !== obj.id ))
        } else {axios.post('https://62f4d5deac59075124c4e860.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, obj]);}
    }

   
    const onAddToCart = (obj) => {
        axios.post('https://62f4d5deac59075124c4e860.mockapi.io/cart', obj);
        setCarts((prev) => [...prev, obj]);

    }
        
    const onRemoveItems =  (id) => {
        axios.delete(`/https://62f4d5deac59075124c4e860.mockapi.io/cart/${id}`);
        setCarts((prev) => prev.filter((items) => items.id !== id ));
    }

    
    return (
        <div className="wrapper">
            <div className='container'>
                <Header/>
                <AppContext.Provider value={{items, favorites, carts, onAddToFavorite, onAddToCart}}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/condition" element={<Condition />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="/favorite" element={<Favorite/>}/>
                    <Route path="/cart" element={<Cart
                        
                        onRemove={onRemoveItems} 
                    />}/>
                    <Route path="/chekout" element={<Chekout/>}/>
                    <Route path="/framed" element={<Framed/>}/>
                </Routes>
                </AppContext.Provider>
                <Footer
                    
                />
            </div>
        </div>
    )
}

export default App;