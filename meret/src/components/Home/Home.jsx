import React from 'react'
import Layout from '../Layout/Layout'
import Hero from '../Hero/hero'
import MainSection from '../main-section/main-section'
import FeaturedCollection from '../Featured-collection/featured-collection'

const Home = () => {
  return(
      <>
      <Layout>
          <Hero />
          <MainSection />
          <FeaturedCollection />
      </Layout>
      </>
  )
}

export default Home