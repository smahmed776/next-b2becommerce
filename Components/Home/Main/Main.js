import React from 'react'
import Hero from './Hero';
import FlashSale from './FlashSale';
import Categories from './Categories';
import Testimonials from '../../Carousel/Testimonials';


const Main = () => {
    return (
        <main className="mt-3">
            <Hero />
            <FlashSale />
            <Categories />
            <Testimonials />
        </main>
    )
}

export default Main
