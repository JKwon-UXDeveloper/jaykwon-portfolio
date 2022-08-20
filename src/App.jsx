import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/Nav'
import About from './components/about/about'
import Career from './components/career/career'
import Experience from './components/experience/experience'
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonials/testimonials'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

export const App = () => {
  return (
    <>
    <Header></Header>
    <Nav></Nav>
    <About></About>
    <Career></Career>
    <Experience></Experience>
    {/* <Services></Services> */}
    <Portfolio></Portfolio>
    <Testimonials></Testimonials>
    <Contact></Contact>
    <Footer></Footer>
    </>    
  )
}

export default App
