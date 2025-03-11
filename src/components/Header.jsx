import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../pages/Home";
import "../pages/Contact"
import "../pages/AllPosts"

const Header = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  return (
    <div className='container col-lg-12 col-md-12 col-sm-12 col-xs-12'>
    <div className="row col-lg-12 col-md-12 col-sm-12 col-xs-12 head">
      <nav>
        <ul>
          <li 
            className="dropdown-container"
            onMouseEnter={() => setDropDownOpen(true)}
            onMouseLeave={() => setDropDownOpen(false)}
          >
            <figure className="menu"><img className="dropbtn menuIcon" src="../images/menu.png" alt="Menu" /></figure>
            {dropDownOpen && (
              <ul className="dropdown-list">
                <li className="menuItem">
                  <Link to="/">Home</Link>
                </li>
                <li className="menuItem">
                  <Link to="/articles">Articles</Link>
                </li>
                <li className="menuItem">
                  <Link to="/about">About</Link>
                </li>
                <li className="menuItem">
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="menuItem">
                  <Link to="/gallery">Gallery</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
    <section className="row sectionA col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <figure className="logo">
                        <img className='responsiveLogo' src="../images/logoSample.png" alt="" />
                    </figure>
                </section>
                <section className="date col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <span className='socials'>
    <img className="twitter" src="../images/twitter1.png" alt="" />
    <Link to='https://web.facebook.com/muemaT.william'><img className="facebook" src="../images/facebook1.png" alt="" /></Link>
    <Link to='mailTo:transformationcentretassia@gmail.com'><img className="email" src="../images/email1.png" alt="" /></Link>
</span>
                </section>
  </div>
  );
}

export default Header;
