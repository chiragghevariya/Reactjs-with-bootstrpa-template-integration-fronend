import React from 'react';
import {Link} from "react-router-dom";

function Header() {
  return (
     
    <header id="header" className="fixed-top header-scrolled">
        <div className="container d-flex align-items-center">

        <h1 className="logo mr-auto"><Link href="/">ReactJs</Link></h1>
        <nav className="nav-menu d-none d-lg-block">
            <ul>
            <li className="active"><Link href="/">Home</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#portfolio">Portfolio</Link></li>
            <li><Link href="#team">Team</Link></li>
            <li><Link href="blog.html">Blog</Link></li>
            <li className="drop-down"><a href="">Drop Down</a>
                <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li className="drop-down"><a href="#">Deep Drop Down</a>
                    <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                </li>
                <li><a href="#">Drop Down 2</a></li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
                </ul>
            </li>
            <li><Link href="#contact">Contact</Link></li>

            </ul>
        </nav>

        </div>
    </header>
  );
}

export default Header;
