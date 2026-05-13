import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import LatestBooks from '@/components/shared/LatestBooks';
import Navbar from '@/components/shared/Navbar';

import React from 'react';


const MainLayout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            <LatestBooks></LatestBooks>
           <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;