import React from 'react'
import Layout from '../../components/layout/Layout'
import Navigation from '../../components/Navigation/Navigation'
import Header from '../../components/Header/Header'
import SocialMedia from '../../components/SocialMedia/SocialMedia'
import Travel from '../../components/Travel/Travel'

const Main = () => {
  return (
  <Layout>
    <Navigation/>
    <Header/>
    <SocialMedia/>
    <Travel/>
  </Layout>
  )
}

export default Main