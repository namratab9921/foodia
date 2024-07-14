import React from 'react'
import img14 from '../Assets/Img/Frame 14.png'
import img15 from '../Assets/Img/Frame 15.png'
import img16 from '../Assets/Img/Frame 16.png'

export default function Popular() {
  function wishlist() {

  }
  return (
    <div className='popular mb-5'>
      <div className="container">

        <div className='d-flex justify-content-between'>
          <h3 className='Sec-title  mb-4'>Popular Food Items</h3>
          <a href='#'>See All</a>
        </div>

        <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row row-pb-md">
                <div class="col-lg-4 mb-4 text-center">
                  <div class="product-entry  ">
                    <a href="#" class="prod-img">
                      <img src={img14} class="img-fluid" alt="" />
                      <div className='wishlist' onclick={wishlist()}><i id='wishlists' class="bi bi-suit-heart"></i></div>
                    </a>
                    <div class="desc">
                      <h6 className='d-flex justify-content-between'><a href="#">Tomato</a>  <span class="price">$19.00</span></h6>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      <div className='rating d-flex'>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i><span>(121)</span>
                      </div>
                      <button className="add-to-cart">Add to Cart</button>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 mb-4 text-center">
                  <div class="product-entry  ">
                    <a href="#" class="prod-img">
                      <img src={img15} class="img-fluid" alt="" />
                      <div className='wishlist' onclick={wishlist()}> <i id='wishlists' class="bi bi-suit-heart"></i></div>
                    </a>

                    <div class="desc">
                      <h6 className='d-flex justify-content-between'><a href="#">Hazelnuts</a>  <span class="price">$19.00</span></h6>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      <div className='rating d-flex'>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i><span>(121)</span>
                      </div>
                      <button className="add-to-cart">Add to Cart</button>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 mb-4 text-center">
                  <div class="product-entry  ">
                    <a href="#" class="prod-img">
                      <img src={img16} class="img-fluid" alt="" />
                      <div className='wishlist' onclick={wishlist()}> <i id='wishlists' class="bi bi-suit-heart"></i></div>
                    </a>
                    <div class="desc">
                      <h6 className='d-flex justify-content-between'><a href="#">Broccoli</a>  <span class="price">$19.00</span></h6>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      <div className='rating d-flex'>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i><span>(121)</span>
                      </div>
                      <button className="add-to-cart">Add to Cart</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div class="carousel-item">
              <div class="row row-pb-md">
                <div class="col-lg-4 mb-4 text-center">
                  <div class="product-entry  ">
                    <a href="#" class="prod-img">
                      <img src={img14} class="img-fluid" alt="" />
                      <div className='wishlist' onclick={wishlist()}><i id='wishlists' class="bi bi-suit-heart"></i></div>
                    </a>
                    <div class="desc">
                      <h6 className='d-flex justify-content-between'><a href="#">Tomato</a>  <span class="price">$19.00</span></h6>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      <div className='rating d-flex'>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i><span>(121)</span>
                      </div>
                      <button className="add-to-cart">Add to Cart</button>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 mb-4 text-center">
                  <div class="product-entry  ">
                    <a href="#" class="prod-img">
                      <img src={img15} class="img-fluid" alt="" />
                      <div className='wishlist' onclick={wishlist()}> <i id='wishlists' class="bi bi-suit-heart"></i></div>
                    </a>

                    <div class="desc">
                      <h6 className='d-flex justify-content-between'><a href="#">Hazelnuts</a>  <span class="price">$19.00</span></h6>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      <div className='rating d-flex'>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i><span>(121)</span>
                      </div>
                      <button className="add-to-cart">Add to Cart</button>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}
