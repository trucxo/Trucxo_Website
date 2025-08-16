import React from 'react';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';

const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
           
          
             <Services />
               <Portfolio />
            <Cta/>
            {/* <Clients /> */}
            
            <Footer />
        </>

    )
}

export default Home;

