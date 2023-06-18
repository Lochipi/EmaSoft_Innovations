"use client"
import { useState } from 'react';
let logo = document.getElementsByClassName('logo')

import Link from 'next/link';
import React from 'react'
import styles from './navbar.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

// function refresh() {
//   logo.innerContent = "Refresh Page"
//   setHover()
// }

function Navbar() {
  
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
          {isHovered ? 'Refresh page 🔄' : "EmaSoft Innovations"}
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) =>
          <Link href={link.url} key={link.url} className={styles.link}>{link.title}</Link>)}

        <button
          className={styles.logoutButton}
          onClick={() => {
          }}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
