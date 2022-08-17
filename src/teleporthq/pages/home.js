import React from 'react'
import { Link } from 'react-router-dom'

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
      <Link to="/" className="home-navlink">
        <div data-thq="thq-dropdown" className="home-thq-dropdown list-item">
          <div data-thq="thq-dropdown-toggle" className="home-my-name">
            <span className="home-text">Long menu item name</span>
            <div data-thq="thq-dropdown-arrow">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M426 726v-428l214 214z"></path>
              </svg>
            </div>
          </div>
          <ul data-thq="thq-dropdown-list" className="home-dropdown-list">
            <li data-thq="thq-dropdown" className="home-dropdown list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="home-dropdown-toggle"
              >
                <span className="home-text01">Sub-menu Item</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="home-dropdown1 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="home-dropdown-toggle01"
              >
                <span className="home-text02">Sub-menu Item</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="home-dropdown2 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="home-dropdown-toggle02"
              >
                <span className="home-text03">Sub-menu Item</span>
              </div>
            </li>
          </ul>
        </div>
      </Link>
      <Hellocomp rootClassName="hellocomp-root-class-name"></Hellocomp>
      <Link to="/" className="home-navlink1">
        <h1 className="home-text04">Heading</h1>
      </Link>
      <h1>
        <span>Hea</span>
        <Link to="/" className="home-navlink2">
          di
        </Link>
        <span>ng</span>
      </h1>
      <h1>Heading</h1>
      <div data-thq="thq-dropdown" className="home-hello list-item">
        <div data-thq="thq-dropdown-toggle" className="home-dropdown-toggle03">
          <span className="home-text09">Menu Item</span>
          <div data-thq="thq-dropdown-arrow">
            <svg viewBox="0 0 1024 1024" className="home-icon2">
              <path d="M426 726v-428l214 214z"></path>
            </svg>
          </div>
        </div>
        <ul data-thq="thq-dropdown-list" className="home-dropdown-list1">
          <li data-thq="thq-dropdown" className="home-dropdown3 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle04"
            >
              <span className="home-text10">Sub-menu Item</span>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="home-dropdown4 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle05"
            >
              <span className="home-text11">Sub-menu Item</span>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="home-dropdown5 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle06"
            >
              <span className="home-text12">Sub-menu Item</span>
            </div>
          </li>
        </ul>
      </div>
      <Link to="/" className="home-navlink3">
        <div data-thq="thq-dropdown" className="home-thq-dropdown1 list-item">
          <div
            data-thq="thq-dropdown-toggle"
            className="home-dropdown-toggle07"
          >
            <span className="home-text13">Menu Item</span>
            <div data-thq="thq-dropdown-arrow">
              <svg viewBox="0 0 1024 1024" className="home-icon4">
                <path d="M426 726v-428l214 214z"></path>
              </svg>
            </div>
          </div>
          <ul data-thq="thq-dropdown-list" className="home-dropdown-list2">
            <li data-thq="thq-dropdown" className="home-dropdown6 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="home-dropdown-toggle08"
              >
                <span className="home-text14">Sub-menu Item</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="home-dropdown7 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="home-dropdown-toggle09"
              >
                <span className="home-text15">Sub-menu Item</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="home-dropdown8 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="home-dropdown-toggle10"
              >
                <span className="home-text16">Sub-menu Item</span>
              </div>
            </li>
          </ul>
        </div>
      </Link>
    </div>
  )
}

export default Home
