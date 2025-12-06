"use client"
import React from 'react'
import Image from 'next/image'
import { navIcons, navLinks } from '@/constants'
import dayjs from 'dayjs'
import useWindowStore from '@/store/window'

const Navbar = () => {

    const {openWindow} = useWindowStore();

  return (
    <nav>
        <div className="">
            <Image src={"/images/logo.svg"} height={10} width={10} alt="logo" />
            <p className='font-bold'>Amjad's Portfolio</p>
            <ul>
                {navLinks.map((link) => (
                    <li key={link.id} onClick={()=>openWindow(link.type)}>
                        <p>{link.name}</p>  
                    </li>
                ))}
            </ul>
        </div>
        <div className="">
            <ul>
                {navIcons.map((icon) => (
                    <li key={icon.id}>
                        <Image src={icon.img} alt={`icon-${icon.id}`} width={15} height={15}/>
                    </li>
                ))}
            </ul>
            <time>{dayjs().format("ddd MMM D h:mm A")}</time>
        </div>
    </nav>
  )
}

export default Navbar