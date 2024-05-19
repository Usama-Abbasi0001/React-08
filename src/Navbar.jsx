
  
 
 import React from 'react'
 
 const Navbar = () => {
   return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid mx-5">
      <a className="navbar-brand" href="/"><img src={ require('./img/Group.png')} alt="" /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav  mx-auto me-auto mb-2 mb-lg-0">
          <li className="nav-item ms-5">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item ms-5">
            <a className="nav-link active" href="/">About Us</a>
          </li>
          <li className="nav-item ms-5">
            <a className="nav-link active" href="/" tabindex="-1" aria-disabled="true">Blog</a>
          </li>
          <li className="nav-item ms-5">
            <a className="nav-link active" href="/" tabindex="-1" aria-disabled="true">Contact Us</a>
          </li>
        </ul>
        <form className="d-flex">
        <button type="button" class="btn btn-primary">Connect Now</button>
        </form>
      </div>
    </div>
    </nav>
   );
 }
 
 export default Navbar
 
