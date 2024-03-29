import React from "react";
import { Link,useLocation } from "react-router-dom";

function Navbar() {
  return (
    <div>
         <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-info py-0 ">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              NewsMela
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-item-active">
                <li className="nav-item">
                  <Link className={`nav-link ${useLocation().pathname==='/'?"active":""}`} aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${useLocation().pathname==='/business'?"active":""}`} to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${useLocation().pathname==='/entertainment'?"active":""}`} to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${useLocation().pathname==='/health'?"active":""}`} to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${useLocation().pathname==='/science'?"active":""}`} to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${useLocation().pathname==='/sports'?"active":""}`} to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${useLocation().pathname==='/technology'?"active":""}`} to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar
