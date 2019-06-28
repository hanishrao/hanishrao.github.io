import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import { Helmet } from 'react-helmet'

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <div>
      <Helmet>
          <title>Hanish Rao | I am a Full Stack Developer based in Mangaluru, India.</title>
      </Helmet>
      <Navbar selected={1}/>
      <Hero />
    </div>
  )
}

export default App;
