import React from 'react'
import Hero from '../components/Hero'
import Collections from '../components/Collections'
import Benefits from '../components/Benefits'
import Categories from '../components/Categories'
import Products from '../components/Products'
import CTA from '../components/cta'
import FAQ from '../components/FAQ'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Benefits/>
      <Collections/>
      <Categories/>
      <Products/>
      <CTA/>
      <FAQ/>
    </div>
  )
}

export default Home
