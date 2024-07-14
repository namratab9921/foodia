import React from 'react'
import img23 from '../Assets/Img/Frame 22.png'
import img24 from '../Assets/Img/Frame 23.png'
import img25 from '../Assets/Img/Frame 24.png'
import img26 from '../Assets/Img/Frame 25.png'

export default function FooterBar() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <a class="navbar-brand" href="#">FOO<span>DIA</span></a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repudiandae accusantium deleniti ratione dolorem et ipsam ipsum nisi. Quia sequi ratione necessitatibus cupiditate possimus esse.</p>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12">
            <h6>Get to know us</h6>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Our Value</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Help Centre</a></li>
            </ul></div>
          <div className="col-lg-2 col-md-6 col-sm-12">
            <h6>Get to know us</h6>
            <ul>
              <li><a href="#">Payment</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Product Returns</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shop Checkout</a></li>
            </ul></div>
          <div className="col-lg-2 col-md-6 col-sm-12">
            <h6>Get to know us</h6>
            <ul>
              <li><a href="#">Butter</a></li>
              <li><a href="#">Milk Drinks</a></li>
              <li><a href="#">Breakfast Cereal</a></li>
              <li><a href="#">Curd & Yogurt</a></li>
              <li><a href="#">Condensed Milk</a></li>
              <li><a href="#">Fruit & Juices</a></li>
            </ul></div>
          <div className="col-lg-2 col-md-6 col-sm-12">
            <h6>Get to know us</h6>
            <ul>
              <li><a href="#">Shopcart Help</a></li>
              <li><a href="#">Return Order</a></li>
              <li><a href="#">Track Order</a></li>
              <li><a href="#">Feedback</a></li>
              <li><a href="#">Security & Fraud</a></li>
            </ul></div>

        </div>
        <div className='copyright-bar d-flex justify-content-between align-items-center'>
          <div> <a href='#' className='me-3'>Terms of service</a> <a href='#' className=''>Privacy Policy</a> </div>
          <p className='copyright-text'>@2024 FOODIA. ALL RIGHTS RESERVED</p>
          <div className='d-flex payment'>
            <a href='#'><img src={img23} class="img-fluid" alt="" /></a>
            <a href='#'><img src={img24} class="img-fluid" alt="" /></a>
            <a href='#'><img src={img25} class="img-fluid" alt="" /></a>
            <a href='#'><img src={img26} class="img-fluid" alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
