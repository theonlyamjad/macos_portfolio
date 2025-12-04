"use client"
import WindowWrapper from '@/hoc/WindowWrapper'
import WindowControl from '@/app/components/WindowControl'  
import Image from 'next/image'
import { socials } from '@/constants'

const Contact = () => {
  return (
    <>
      <div id='window-header'>
        <WindowControl target="contact" />
        <h2>Contact Me</h2>
    </div>

    <div className="p-5 space-y-5">
        <Image 
        src="/adrian.jpg"
        alt="Adrian"
        width={200}
        height={200}
        />
        <h3>Let's Connect</h3>
        <p>Got an Idea ? reach me !</p>
        <p>benamaraamjad766@gmail.com</p>
        <ul>
          {socials.map(({id,bg,link,icon,text})=> (
              <li key={id} style={{backgroundColor:bg}}>
                <a href={link} target="_blank" rel="noreferrer noopener" title={text}>  
                  <Image
                  src={icon}
                  alt={text}
                  className="size-5"
                  />
                  <p>{text}</p>
                </a>
              </li>
          ))}
        </ul>
    </div>
    </>
  )
}

const ContactWindow = WindowWrapper(Contact,'contact');

export default ContactWindow
