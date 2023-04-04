import React from 'react';
import {Routes, Route,} from "react-router-dom";
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import Cart from './pages/Cart'
import Chekout from './pages/Chekout';
import Framed from './pages/Framed';
import AppContext from './context';

import './scss/app.scss';




function App() {
    
    const [favorites, setFavorites] = React.useState([])
    const [searchValue, setSearchValue] = React.useState('')

    
    React.useEffect(() => {
        
        axios.get('https://62f4d5deac59075124c4e860.mockapi.io/favorites').then((res) => {
            setFavorites(res.data);
        });
      
    }, []);



   
    
    return (
        <div className="wrapper">
            <div className='container'>
            <AppContext.Provider value={{favorites, searchValue, setSearchValue}}>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/favorite" element={<Favorite/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/chekout" element={<Chekout/>}/>
                    <Route path="/framed" element={<Framed/>}/>
                </Routes>
                </AppContext.Provider>
                <Footer/>
            </div>
        </div>
    )
}

export default App;