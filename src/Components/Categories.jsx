import React from 'react'
import img1 from '../Assets/Img/Frame 2.png'
import img2 from '../Assets/Img/Frame 3.png'
import img3 from '../Assets/Img/Frame 4.png'
import img4 from '../Assets/Img/Frame 5.png'
import img5 from '../Assets/Img/Frame 1.png'


export default function () {
  return (
    <div className='sec-categories mt-5 mb-5'>
      <div className='container'>
        <h3 className='Sec-title mb-4'>Choose Your Featured Categories</h3>
        <div className='d-flex'>

          <a href='#'> <div class="card" style={{ backgroundColor: "#f5dfcf" }}>
            <img src={img1} class="card-img-top w-100" alt="..." />
            <div class="card-body">
              <h5 class="card-head">Green Beans</h5>
            </div>
          </div></a>

          <a href='#'> <div class="card" style={{ backgroundColor: "#cff5da" }}>
            <img src={img2} class="card-img-top w-100" alt="..." />
            <div class="card-body">
              <h5 class="card-head">Sapota Fruit</h5>
            </div>
          </div></a>

          <a href='#'> <div class="card" style={{ backgroundColor: "#f4f5cf" }}>
            <img src={img3} class="card-img-top w-100" alt="..." />
            <div class="card-body">
              <h5 class="card-head">Tomatoes</h5>
            </div>
          </div></a>

          <a href='#'> <div class="card" style={{ backgroundColor: "#cff5f5" }}>
            <img src={img4} class="card-img-top w-100" alt="..." />
            <div class="card-body">
              <h5 class="card-head">Bell Peppers</h5>
            </div>
          </div></a>

          <a href='#'> <div class="card" style={{ backgroundColor: "#cfd2f5" }}>
            <img src={img5} class="card-img-top w-100" alt="..." />
            <div class="card-body">
              <h5 class="card-head">Cabbage</h5>
            </div>
          </div></a>
        </div>
      </div>
    </div>
  )
}
