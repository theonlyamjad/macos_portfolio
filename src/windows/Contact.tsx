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

<div className="flex flex-col gap-3 bg-black border border-white/10 rounded-2xl mx-10 mt-5 p-6">
  <div>
    <h3 className="text-white font-semibold text-sm">Let's Connect</h3>
    <p className="text-white/40 text-xs mt-0.5">Got an idea? Reach me!</p>
  </div>

  <a
    href="mailto:benamaraamjad766@gmail.com"
    className="group flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
  >
    <div className="w-7 h-7 rounded-lg bg-rose-500/20 flex items-center justify-center shrink-0">
      <svg className="w-3.5 h-3.5 text-rose-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    </div>
    <span className="text-white/60 group-hover:text-white/90 text-xs font-medium transition-colors">
      benamaraamjad766@gmail.com
    </span>
    <svg className="w-3 h-3 text-white/20 group-hover:text-white/50 transition-colors ml-auto" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
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
