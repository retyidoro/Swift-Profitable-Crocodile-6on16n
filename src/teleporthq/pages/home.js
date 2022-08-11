import React from 'react'

import { Helmet } from 'react-helmet'

import Hellocomp from '../components/hellocomp'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Swift Profitable Crocodile</title>
        <meta property="og:title" content="Swift Profitable Crocodile" />
      </Helmet>
      <Hellocomp rootClassName="hellocomp-root-class-name"></Hellocomp>
    </div>
  )
}

export default Home
