import React from 'react'
import img21 from '../Assets/Img/delivery.png'
import img22 from '../Assets/Img/wallet.png'
import img23 from '../Assets/Img/money-back.png'
import img24 from '../Assets/Img/discount.png'

export default function MoreInfo() {
  return (
    <div className='info'>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 d-flex align-items-center border-right"><div><img src={img21} alt='' /></div>
            <div><h4>Free Delivery</h4>

              <p>Get Free Delivery for order spent $100 or over</p></div>
          </div>
          <div className="col-lg-3 d-flex align-items-center border-right"><div><img src={img22} alt='' /></div>
            <div><h4>Safe Payment</h4>

              <p>Payment system is very much sage and secure</p></div>
          </div>
          <div className="col-lg-3 d-flex align-items-center border-right"><div><img src={img23} alt='' /></div>
            <div><h4>Money Back</h4>

              <p>Very easy to make your money back option</p></div>
          </div>
          <div className="col-lg-3 d-flex align-items-center "><div><img src={img24} alt='' /></div>
            <div><h4>Best Prices and Offers</h4>

              <p>Cashback offers to top it off. get best prices and offers</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}
