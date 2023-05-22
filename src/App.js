import React from 'react'
import Header from './components/Header/Header'
import HeroSection from './components/Hero-section/Hero-section'
import SlickSlider from './components/Slick-slider/Slick-slider'
import Tags from './components/Tags/Tags'
import Comments from './components/Comments/Comments'
import CommentsSection from './components/Comments-section/Comments-section'
import Profile from './components/Profile-section/Profile-section'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
  <div>
      <Header />
      <HeroSection />
      <Tags />
      <SlickSlider />
      <Comments />
      <CommentsSection />
      <Footer />
  </div>
  )
  
}

export default App