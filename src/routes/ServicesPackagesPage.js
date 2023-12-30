import React from 'react';

import Navbar from '../components/navbar/Navbar';
import ServicesPackages from '../components/servicespackages/ServicesPackages';
import StripePricingTable from '../components/stripepricingtable//StripePricingTable';
import Footer from '../components/footer/Footer';

const ServicesPackagesPage = () => {
    return  (
        <>
            <Navbar />
            <ServicesPackages />
            <StripePricingTable />
            <Footer />
        </>
    )
}

export default ServicesPackagesPage;