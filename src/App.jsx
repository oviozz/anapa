
import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavBarLayout from './Components/NavBar/NavBarLayout.jsx';
import Home from './Pages/Home/Home.jsx';
import CategoryProduct from './Pages/CategoryProduct/CategoryProduct.jsx';
import ProductDetail from "./Components/ProductDetailCard/ProductDetail.jsx";
import {ShoppingCartProvider} from "./Components/ShoppingCartProvider/ShoppingCartContext.jsx";
import ShoppingCartList from "./Components/ShoppingCartList/ShoppingCartList.jsx";
import About from "./Pages/About/About.jsx";


function App() {

    return (
        <ShoppingCartProvider>
            <NavBarLayout>
                <Routes>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/category/:item'} element={<CategoryProduct />} />
                    <Route path={'/detail/:category/:itemID'} element={<ProductDetail />} />
                    <Route path={'/purchase'} element={<ShoppingCartList />} />
                    <Route path={'/about'} element={<About />} />
                </Routes>
            </NavBarLayout>
        </ShoppingCartProvider>
    );
}

export default App;
