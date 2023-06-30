import InputHeader from '@/components/InputHeader'
import React from 'react'

const Herder = ({handleSearch}) => {
  return (
    <div>
         <section className=" top-txt ">
          <div className="head container ">
            <div className="head-txt ">
              <p>Free shipping, 30-day return or refund guarantee.</p>
            </div>
            <div className="sing_in_up ">
              <a href="# ">SIGN IN</a>
              <a href="# ">SIGN UP</a>
            </div>
          </div>
        </section>
        <nav className="navbar">
          <div className="navbar-container">
            <input type="checkbox" name="" id="checkbox" />
            <div className="hamburger-lines">
              <span className="line line1" />
              <span className="line line2" />
              <span className="line line3" />
            </div>
            <ul className="menu-items">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#collection">Categories</a>
              </li>
              <li>
                <a href="#sellers">FlashSale</a>
              </li>
              <li>
                <a href="#hotdeal">HotDeal</a>
              </li>
              <li>
                <a href="#productlist">ProductList</a>
              </li>
            </ul>
            <div className="logo">
              <img src="https://companieslogo.com/img/orig/SHOP_BIG-cc7ba62b.png?t=1633439432" alt="" />
            </div>
            <InputHeader onSearch={handleSearch} />
          </div>
        </nav>
    </div>
  )
}

export default Herder