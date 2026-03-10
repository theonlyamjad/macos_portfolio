"use client"
import WindowWrapper from '@/hoc/WindowWrapper'
import WindowControl from '@/app/components/WindowControl'  
import Image from 'next/image'
import { socials } from '@/constants'

const Contact = () => {
  return (
    <div>
      <div id='window-header'>
          <WindowControl target="contact" />
          <h2>Contact Me</h2>
      </div>

<div className="flex flex-col gap-2 mx-4 mt-4 bg-black">
  {/* Section label — macOS sidebar style */}
  <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30 px-2">
    Contact
  </p>

  {/* Info row */}
  <div className="px-3 py-2">
    <p className="text-white/90 text-[13px] font-medium">Let's Connect</p>
    <p className="text-white/40 text-[11px] mt-0.5">Got an idea? Reach me!</p>
  </div>

  {/* Email row — macOS list item style */}
  <a
    href="mailto:benamaraamjad766@gmail.com"
    className="group flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-white/10 active:bg-white/15 transition-all duration-150 cursor-default"
  >
    <div className="w-7 h-7 rounded-full bg-rose-500 flex items-center justify-center shrink-0 shadow-sm">
      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    </div>
    <div className="flex flex-col min-w-0">
      <span className="text-white/40 text-[10px]">Email</span>
      <span className="text-white/80 text-[12px] group-hover:text-white transition-colors truncate">
        benamaraamjad766@gmail.com
      </span>
    </div>
    {/* macOS disclosure chevron */}
    <svg className="w-3 h-3 text-white/20 group-hover:text-white/40 ml-auto shrink-0 transition-colors" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  </a>
</div>    
        <div className="p-5 space-y-5">
          <ul>
            {socials.map(({id,bg,link,icon,text})=> (
                <li key={id} style={{backgroundColor:bg}}>
                  <a href={link} target="_blank" rel="noreferrer noopener" title={text}>  
                    <Image
                    src={icon}
                    alt={text}
                    width={20}
                    height={20}
                    className="size-10"
                    />
                    <p>{text}</p>
                  </a>
                </li>
            ))}
          </ul>
      </div>
    </div>
  )
}
const ContactWindow = WindowWrapper(Contact,'contact');
export default ContactWindow
