import React from 'react';
import Home from '../Home/Home';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import  { Toaster } from 'react-hot-toast';
import EmojiPicker from 'emoji-picker-react';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Toaster></Toaster>
        </div>
    );
};

export default Main;