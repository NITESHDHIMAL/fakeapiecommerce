import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div class="site-navbar bg-white py-2">

<div class="search-wrap">
  <div class="container">
    <Link to="#" class="search-close js-search-close"><span class="icon-close2"></span></Link>
    <form action="#" method="post">
      <input type="text" class="form-control" placeholder="Search keyword and hit enter..."/>
    </form>  
  </div>
</div>

<div class="container">
  <div class="d-flex align-items-center justify-content-between">
    <div class="logo">
      <div class="site-logo">
        <Link to="/" class="js-logo-clone">ShopMax</Link>
      </div>
    </div>
    <div class="main-nav d-none d-lg-block">
      <nav class="site-navigation text-right text-md-center" role="navigation">
        <ul class="site-menu js-clone-nav d-none d-lg-block">
          <li>
            <Link to="/">Home</Link> 
          </li>
          
          <li><Link to="/shop">Shop</Link></li> 
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
    <div class="icons">
      <Link to="#" class="icons-btn d-inline-block js-search-open"><span class="icon-search"></span></Link>
      <Link to="#" class="icons-btn d-inline-block"><span class="icon-heart-o"></span></Link>
      <Link to="/cart" class="icons-btn d-inline-block bag">
        <span class="icon-shopping-bag"></span>
        <span class="number">2</span>
      </Link>
      <Link to="#" class="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span class="icon-menu"></span></Link>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default Header