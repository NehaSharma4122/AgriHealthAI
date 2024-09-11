import React, { useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
    const location = useLocation();
    const [menu,setMenu] = useState("home");
  return (
    <div className="navbar">
      <Link to='/'><h2 className="name-logo">AgriHealth AI</h2></Link>
      <ul className="lists">
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>About Us</Link>
        <Link to='/technology' onClick={()=>setMenu("technology")} className={menu==="technology" || location.pathname==='/technology' ?"active":""}>Technology</Link>
        <a href="#sustainability" onClick={()=>setMenu("sustainability")} className={menu==="sustainability" || location.pathname==='/sustainability' ?"active":""}>Sustainability</a>
        <Link to='/blog' onClick={()=>setMenu("blog")} className={menu==="blog" || location.pathname==='/blog' ?"active":""}>Blog</Link>
        <a href="#contact" onClick={()=>setMenu("contact")} className={menu==="contact" || location.pathname==='/contact' ?"active":""}>Contact Us</a>
      </ul>
      <button>Sign In</button>
    </div>
  );
};

export default Navbar;
