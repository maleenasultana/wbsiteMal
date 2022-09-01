import React,{useState} from 'react';
import {Link} from "react-router-dom";


function About() {

    const [mystate,setMyState]=useState({
        color:"white",
        backgroundColor:"black"
})
    const toggle=()=>{
    if(mystate.color ==="white"){
    setMyState({
        color:"black",
        backgroundColor:"white"
    })

    }else{
    
        setMyState({
            color:"white",
            backgroundColor:"black"
        })
    }
}
  return (
    <>
    <div className='container my-5' style={mystate}>
       <nav id="navbar-example2" className="navbar navbar-dark bg-dark px-3">
  <Link className="navbar-brand" href="/"></Link>
  <ul className="nav nav-pills">
    <li className="nav-item">
      <Link className="nav-link" href="#scrollspyHeading1">First</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" href="#scrollspyHeading2">Second</Link>
    </li>
    <li className="nav-item dropdown">
      <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-expanded="false">Dropdown</Link>
      <ul className="dropdown-menu">
        <li><Link className="dropdown-item" href="#scrollspyHeading3">Third</Link></li>
        <li><Link className="dropdown-item" href="#scrollspyHeading4">Fourth</Link></li>
        <li><hr className="dropdown-divider"/></li>
        <li><Link className="dropdown-item" href="#scrollspyHeading5">Fifth</Link></li>
      </ul>
    </li>
  </ul>
</nav>
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabindex="0">
  <h4 id="scrollspyHeading1">First heading</h4>
  <p>asdf ;lkj asdf ;lkj asdf ;lkj asdf ;lkj asdf ;lkj asdf ;lkj</p>
  <h4 id="scrollspyHeading2">Second heading</h4>
  <p>app apple apple apple apple apple</p>
  <h4 id="scrollspyHeading3">Third heading</h4>
  <p>camelCase is new style of writing ...</p>
  <button className='btn btn-primary' onClick={toggle}>dark mode</button>
  
</div> 
    </div>
    </>
  )
}

export default About;