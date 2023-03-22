import React from 'react'
import Link from 'next/link'
import styles from './NavBar.module.css'
import { ActiveLink } from './ActiveLink'

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];
export  const NavBar=()=> {
  return (

      <nav className={styles.menu}>

        {
          menuItems.map(({text, href})=>(
            <ActiveLink key={href} text={text} href={href}/>
          ))
        }

        {/* <ActiveLink text="Home" href="/"/>
        <ActiveLink text="
        About" href="/about" />
        <ActiveLink text="Contac" href="/contact"/>
        <ActiveLink text="Priceng" href="/princing"/> */}
      </nav>
   
  )
}
