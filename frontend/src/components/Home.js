import React from 'react'
import Shoes from './Shoes'
import Clothing from './Clothing'
import Footer from './Footer'
import Welcome from './welcome'

export default function Home() {
  return (
    <>
    <Welcome/>
    <div style={{paddingTop:'50px'}}></div>
    <Shoes />
    <Clothing />
    <Footer />
    </>
  )
}
