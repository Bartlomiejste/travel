import React from 'react'
import Layout from '../../components/layout/Layout'
import Header from '../../components/Header/Header'
import SocialMedia from '../../components/SocialMedia/SocialMedia'
import Travel from '../../components/Travel/Travel'
import AboutUs from '../../components/AboutUs/AboutUs'
import TravelVideo from '../../components/TravelVideo/TravelVideo'
import MapView from '../../components/MapView/MapView'

const Main = () => {

  return (
  <Layout>
    <Header/>
    <SocialMedia/>
    <Travel/>
    <AboutUs/>
    <TravelVideo/>
    <MapView/>
  </Layout>
  )
}

export default Main