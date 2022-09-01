import React from 'react'
import {Link} from "react-router-dom";

function Navbar(props) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Word Count </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-1 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">About</Link>
        </li>
        
      </ul>
         <div className={`form-check form-switch mx-5 text-${props.mode ==="light" ? "dark" : "light"}`}>
             <input className="form-check-input"onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
             <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark/Light</label>
         </div>
      <form className="d-flex">
        <input className="form-control " type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar;
//for setting default props in Navbar
//if send props as numbers it will throw error....

// Navbar.propTypes ={
//     title: propTypes.string.isRequired,
//     about: propTypes.string
// }

//default text is given to props.....

// Navbar.defaultProps ={
//     title: "text" ,
//     about : "About"
// };

