import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" >Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to={"/"} class="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li class="nav-item">
          <Link to={"/about"} class="nav-link" href="#">About</Link>
        </li>
        <li class="nav-item">
          <Link to={"/services"} class="nav-link" href="#">Services</Link>
        </li>
        <li class="nav-item">
          <Link to={"/contact"} class="nav-link" href="#">Contact</Link>
        </li>
        <li class="nav-item">
          <Link to={"/testimonial"} class="nav-link" href="#">Testimonial</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" href="#">Action</Link></li>
            <li><Link class="dropdown-item" href="#">Another action</Link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><Link class="dropdown-item" href="#">Something else here</Link></li>
          </ul>
        </li>
        <li class="nav-item">
          <Link class="nav-link disabled" aria-disabled="true">Disabled</Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>
  )
}

export default Navbar