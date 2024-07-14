import React from 'react'

export default function Offers() {
  return (
    <div className='offer mb-5'>
      <div className="container">
        <div className="d-flex" style={{ gap: "20px" }}>

          <div className="card">
            <div className='card-body'>
              <p className='subtit'>Exclusive Offer <span className='off'>15% Off</span></p>
              <h3>Best Online <br /> Deals, Free Stuff</h3>
              <p >Only on this week... don't miss </p>

              <a href='#' >Get Best Deal <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div className="card">
            <div className='card-body'>
              <p className='subtit'>Regular Offer </p>
              <h3>10% Cash-back <br /> on Personal Care</h3>
              <p >Max Cashback: $12. Code: CADHL837 </p>

              <a href='#' >Shop Now <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
