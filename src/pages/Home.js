import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/header/Header'
import Skills from '../components/Skills/Skills'
import Cert from '../components/Cert/Cert'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Skills />
      <Cert />
      {/* <Contact /> */}
      <Footer />
    </div>
  )
}

export default Home
