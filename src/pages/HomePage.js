import React from 'react'
import Header from "../components/Header.js"
import Home_images from '../components/Home_images.js'
import Home_Main from '../components/Home_main.js'
import styles from "../styles/Home_page.css"

const HomePage = () => {
  return (
    <>
    <Header/>
    <Home_images />
    <Home_Main />

    </>
  )
}

export default HomePage