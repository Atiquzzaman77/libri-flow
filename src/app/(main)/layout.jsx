import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';

import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
           <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;