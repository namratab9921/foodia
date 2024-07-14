import React from 'react'
import img18 from '../Assets/Img/Frame 18.png'
import img19 from '../Assets/Img/Frame 19.png'
import img20 from '../Assets/Img/Frame 20.png'

export default function GetStarted() {
  return (
    <div className='getstarted mb-5'>
      <div className="container">
        <h3 className='Sec-title mb-4'>Ready to get started?</h3>

        <div className="d-flex" style={{ gap: "20px" }}>

          <div className="card col-lg-4">
            <div className='card-body'>
              <img src={img18} class="img-fluid " alt="" />
              <h3>Grow my business with FoodieCart</h3>
              <p >Let us help your business reach more customers</p>

              <a href='#' >Learn More &nbsp;&nbsp;<i class="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div className="card col-lg-4">
            <div className='card-body'>
              <img src={img19} class="img-fluid " alt="" />
              <h3>Advertise brand on FoodieCart</h3>
              <p >Let us help your business reach more customers</p>

              <a href='#' >Learn More &nbsp;&nbsp;<i class="bi bi-arrow-right"></i></a>
            </div>
          </div>


          <div className="card col-lg-4">
            <div className='card-body'>
              <img src={img20} class="img-fluid" alt="" />
              <h3>Learn more about FoodieCart</h3>
              <p >Let us help your business reach more customers</p>

              <a href='#' >Learn More &nbsp;&nbsp;<i class="bi bi-arrow-right"></i></a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
