import React from 'react'
import Image from 'next/image'
import { navIcons, navLinks } from '@/constants'

const Navbar = () => {
  return (
    <nav>
        <div className="">
            <Image src={"/images/logo.svg"} height={10} width={10} alt="logo" />
            <p className='font-bold'>Amjad's Portfolio</p>
            <ul>
                {navLinks.map((link) => (
                    <li key={link.id}>
                        <p>{link.name}</p>  
                    </li>
                ))}
            </ul>
        </div>
        <div className="">
            <ul>
                {navIcons.map((icon) => (
                    <li key={icon.id}></li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar