import React from 'react'

export default function Navbar() {
  return (
    <div>


      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <a class="navbar-brand" href="#">FOO<span>DIA</span></a>
          <button class="navbar-toggler" type="button" data-bs-dismiss="collapse" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Shop</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Blog</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Products
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item" href="#">Category 1</a></li>
                  <li><a class="dropdown-item" href="#">Category 2</a></li>
                  <li><a class="dropdown-item" href="#">Category 3</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pages
                </a>

                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item" href="#">Page 1</a></li>
                  <li><a class="dropdown-item" href="#">Page 2</a></li>
                  <li><a class="dropdown-item" href="#">Page 3</a></li>
                </ul>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>


            </ul>

            <div className='searchbox'>
              <form class="search d-flex">
                <input type="text" placeholder="Search Products" name="search" />
                <button type="submit"><i class="bi bi-search"></i></button>
              </form>
            </div>

            <div>
              <div className="d-flex">
                <ul className="social-icons list-unstyled mb-0 ml-10 mr-20 d-flex">
                  <li><a href="#"><i class="bi bi-person-circle me-3"></i> Account</a></li> &nbsp;&nbsp; |
                  <li>&nbsp;&nbsp;<a className='cart' href="#"><i class="bi bi-cart3  me-3"></i> Cart</a></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </nav>

    </div>
  )
}
