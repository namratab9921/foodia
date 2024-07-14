import React from 'react'
import banner1 from '../Assets/Img/Group 2.png'
import banner2 from '../Assets/Img/Group 3.png'

export default function Banner() {
  return (
    <div className='banner'><div id="carouselExampleCaptions" class="carousel slide " data-bs-ride="carousel">
      {/* <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>

      </div> */}

      <div class="container carousel-inner">
        <div class="carousel-item active">
          <div className='row d-flex'>
            <div class=" col-lg-6 carousel-caption ">
              <p className='colorgreen subhead'> Welcome to a Culinary Paradise</p>
              <h3>Indulge in Exquisite Flavors with FoodieCart</h3>
              <p className='cap-desc pt-3 pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora impedit voluptate ea, fugiat officiis commodi.</p>
              <button type='submit'>Shop Now  <i class="bi bi-arrow-right"></i></button>
            </div>
            <div className='col-lg-6'><img src={banner1} class="d-block w-100" alt="..." /></div>
          </div>
        </div>
        <div class="carousel-item">
          <div className='row d-flex'>
            <div class=" col-lg-6 carousel-caption ">
              <p className='colorgreen subhead'> Welcome to a Culinary Paradise</p>
              <h3>Indulge in Exquisite Flavors with FoodieCart</h3>
              <p className='cap-desc pt-3 pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsa dicta, sequi error aliquid sunt.</p>
              <button type='submit'>Shop Now  <i class="bi bi-arrow-right"></i></button>
            </div>
            <div className='col-lg-6'><img src={banner2} class="d-block w-100" alt="..." /></div>
          </div>
        </div>

      </div>
      {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button> */}
    </div></div>
  )
}
