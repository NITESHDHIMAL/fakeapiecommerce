import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className="site-navbar bg-white py-2">

<div className="search-wrap">
  <div className="container">
    <Link to="#" className="search-close js-search-close"><span className="icon-close2"></span></Link>
    <form action="#" method="post">
      <input type="text" className="form-control" placeholder="Search keyword and hit enter..."/>
    </form>  
  </div>
</div>

<div className="container">
  <div className="d-flex align-items-center justify-content-between">
    <div className="logo">
      <div className="site-logo">
        <Link to="/" className="js-logo-clone">ShopMax</Link>
      </div>
    </div>
    <div className="main-nav d-none d-lg-block">
      <nav className="site-navigation text-right text-md-center" role="navigation">
        <ul className="site-menu js-clone-nav d-none d-lg-block">
          <li>
            <Link to="/">Home</Link> 
          </li>
          
          <li><Link to="/shop">Shop</Link></li> 
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
    <div className="icons">
      <Link to="#" className="icons-btn d-inline-block js-search-open"><span className="icon-search"></span></Link>
      <Link to="#" className="icons-btn d-inline-block"><span className="icon-heart-o"></span></Link>
      <Link to="/cart" className="icons-btn d-inline-block bag">
        <span className="icon-shopping-bag"></span>
        <span className="number">2</span>
      </Link>
      <Link to="#" className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span className="icon-menu"></span></Link>
     <Link to={"/login"}>Login</Link>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default Header