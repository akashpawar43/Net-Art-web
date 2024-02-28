import React from 'react'
import Hero from './components/Hero'
import Parts from './components/Parts'
import Footer from './components/Footer'
import Header from './components/Header'

export default function App() {
  return (
    <div className='' style={{overflow: "hidden",background: "linear-gradient(175deg, rgba(255,255,255,1) 0%, rgba(236,238,148,1) 100%)" }}>
      <Header />
      <Hero />
      <Parts />
      <footer className=' bg-red-500'>
        <Footer />
      </footer>
    </div>
  )
}
