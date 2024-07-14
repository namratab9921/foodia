import React from 'react'
import img6 from '../Assets/Img/Frame 6.png'
import img7 from '../Assets/Img/Frame 7.png'
import img8 from '../Assets/Img/Frame 8.png'
import img9 from '../Assets/Img/Frame 9.png'
import img10 from '../Assets/Img/Frame 10.png'
import img11 from '../Assets/Img/Frame 11.png'
import img12 from '../Assets/Img/Frame 12.png'
import img13 from '../Assets/Img/Frame 13.png'


export default function BestSelling() {

  // function wishlist() {
  //   var changename = document.getElementById("wishlists");
  //   // changename.classList = "bi bi-suit-heart-fill";
  // }

  // function openPage(pageName, elmnt) {
  //   // Hide all elements with class="tabcontent" by default */
  //   var i, tabcontent, tablinks;
  //   tabcontent = document.getElementsByClassName("tabcontent");
  //   for (i = 0; i < tabcontent.length; i++) {
  //     tabcontent[i].style.display = "none";
  //   }

  //   // Remove the background color of all tablinks/buttons
  //   tablinks = document.getElementsByClassName("tablink");
  //   for (i = 0; i < tablinks.length; i++) {
  //     tablinks[i].style.backgroundColor = "";
  //   }

  //   // Show the specific tab content
  //   document.getElementById(pageName).style.display = "block";

  //   // Add the specific color to the button used to open the tab content
  //   // elmnt.style.backgroundColor = color;
  // }

  // Get the element with id="defaultOpen" and click on it
  // document.getElementById("defaultOpen").onclick();

  return (


    <div className='selling'>
      <div className='container  mt-5'>

        <h3 className='Sec-title  mb-4'>Today's Best Selling Product!</h3>

        <div className='tab-btns'>
          <button class="tablink active" onclick="openPage(event, 'All')">All</button>
          <button class="tablink" onclick="openPage(event, 'Butter')">Butter</button>
          <button class="tablink" onclick="openPage(event, 'MilkDrinks')">Milk Drinks</button>
          <button class="tablink" onclick="openPage(event, 'BreakfastCereal')">Breakfast Cereal</button>
          <button class="tablink" onclick="openPage(event, 'CurdYogurt')">Curd & Yogurt</button>
          <button class="tablink" onclick="openPage(event, 'CondensedMilk')">Condensed Milk </button>
          <button class="tablink" onclick="openPage(event, 'FruitsJuices')">Fruits & Juices</button>
        </div>

        <div className='tabscont'>
          <div id="All" class="tabcontent">
            <div class="row row-pb-md">
              <div class="col-lg-3 mb-4 text-center">
                <div class="product-entry  ">
                  <a href="#" class="prod-img">
                    <img src={img6} class="img-fluid" alt="" />
                    <div className='wishlist'  ><i id='wishlists' class="bi bi-suit-heart"></i></div>
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
              <div class="col-lg-3 mb-4 text-center">
                <div class="product-entry  ">
                  <a href="#" class="prod-img">
                    <img src={img7} class="img-fluid" alt="" />
                    <div className='wishlist'  > <i id='wishlists' class="bi bi-suit-heart"></i></div>
                  </a>

                  <div class="desc">
                    <h6 className='d-flex justify-content-between'><a href="#">Fresh Vegetables Pile</a>  <span class="price">$19.00</span></h6>
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
              <div class="col-lg-3 mb-4 text-center">
                <div class="product-entry  ">
                  <a href="#" class="prod-img">
                    <img src={img8} class="img-fluid" alt="" />
                    <div className='wishlist'  > <i id='wishlists' class="bi bi-suit-heart"></i></div>
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
              <div class="col-lg-3 mb-4 text-center">
                <div class="product-entry  ">
                  <a href="#" class="prod-img">
                    <img src={img9} class="img-fluid" alt="" />
                    <div className='wishlist'  > <i id='wishlists' class="bi bi-suit-heart"></i></div>
                  </a>
                  <div class="desc">
                    <h6 className='d-flex justify-content-between'><a href="#">Vegetables Basket</a>  <span class="price">$19.00</span></h6>
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
              <div class="w-100 mb-5"></div>
              <div class="col-lg-3 mb-4 text-center">
                <div class="product-entry  ">
                  <a href="#" class="prod-img">
                    <img src={img10} class="img-fluid" alt="" />
                    <div className='wishlist'  > <i id='wishlists' class="bi bi-suit-heart"></i></div>
                  </a>
                  <div class="desc">
                    <h6 className='d-flex justify-content-between'><a href="#">Lettuce Leaf</a>  <span class="price">$19.00</span></h6>
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
              <div class="col-lg-3 mb-4 text-center">
                <div class="product-entry  ">
                  <a href="#" class="prod-img">
                    <img src={img11} class="img-fluid" alt="" />
                    <div className='wishlist'  > <i id='wishlists' class="bi bi-suit-heart"></i></div>
                  </a>
                  <div class="desc">
                    <h6 className='d-flex justify-content-between'><a href="#">Capsicum</a>  <span class="price">$19.00</span></h6>
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
              <div class="col-lg-3 mb-4 text-center">
                <div class="product-entry  ">
                  <a href="#" class="prod-img">
                    <img src={img12} class="img-fluid" alt="" />
                    <div className='wishlist'  > <i id='wishlists' class="bi bi-suit-heart"></i></div>
                  </a>
                  <div class="desc">
                    <h6 className='d-flex justify-content-between'><a href="#">Different Vegetables</a>  <span class="price">$19.00</span></h6>
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
              <div class="col-lg-3 mb-4 text-center">
                <div class="product-entry  ">
                  <a href="#" class="prod-img">
                    <img src={img13} class="img-fluid" alt="" />
                    <div className='wishlist'  > <i id='wishlists' class="bi bi-suit-heart"></i></div>
                  </a>
                  <div class="desc">
                    <h6 className='d-flex justify-content-between'><a href="#">Aubergine</a>  <span class="price">$19.00</span></h6>
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

        {/* <div id="Butter" class="tabcontent">
            <h3>News</h3>
            <p>Some news this fine day!</p>
          </div>

          <div id="MilkDrinks" class="tabcontent">
            <h3>Contact</h3>
            <p>Get in touch, or swing by for a cup of coffee.</p>
          </div>

          <div id="BreakfastCereal" class="tabcontent">
            <h3>About</h3>
            <p>Who we are and what we do.</p>
          </div>

          <div id="CurdYogurt" class="tabcontent">
            <h3>About</h3>
            <p>Who we are and what we do.</p>
          </div>

          <div id="CondensedMilk" class="tabcontent">
            <h3>About</h3>
            <p>Who we are and what we do.</p>
          </div>

          <div id="FruitsJuices" class="tabcontent">
            <h3>About</h3>
            <p>Who we are and what we do.</p>
          </div> */}


      </div>
    </div>

    // </div >
    // </div >
  )
}
