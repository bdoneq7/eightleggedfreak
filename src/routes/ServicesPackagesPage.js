import React from 'react';

import Navbar from '../components/navbar/Navbar';
import ServicesPackages from '../components/servicespackages/ServicesPackages';
import Footer from '../components/footer/Footer';

const ServicesPackagesPage = () => {
    return  (
        <>
            <Navbar />
            <ServicesPackages />
            <Footer />
        </>
    )
}

export default ServicesPackagesPage;