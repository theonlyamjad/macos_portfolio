"use client"
import { useState } from 'react'
import WindowWrapper from '@/hoc/WindowWrapper'
import WindowControl from '@/app/components/WindowControl'
import Image from 'next/image'
import { socials } from '@/constants'

const EMAIL = 'benamaraamjad766@gmail.com'

const Contact = () => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div
      className="flex flex-col h-full overflow-hidden relative"
      style={{
        background: '#f5f5f7',
        borderRadius: '12px',
        border: '0.5px solid rgba(0, 0, 0, 0.15)',
        boxShadow: '0 20px 60px -10px rgba(0, 0, 0, 0.25), 0 0 0 0.5px rgba(255, 255, 255, 0.5) inset',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
      }}
    >
      {/* ── Title bar ── */}
      <div
        id="window-header"
        className="flex items-center h-[52px] px-4 shrink-0 select-none relative"
        style={{
          background: 'rgba(245, 245, 247, 0.8)',
          backdropFilter: 'blur(20px) saturate(150%)',
          WebkitBackdropFilter: 'blur(20px) saturate(150%)',
          borderBottom: '0.5px solid rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="absolute left-4 flex items-center h-full">
          <WindowControl target="contact" />
        </div>
        <div className="flex-1 flex justify-center pointer-events-none">
          <span className="text-[13px] font-semibold tracking-wide" style={{ color: '#4a4a4c' }}>
            Contact
          </span>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col flex-1 overflow-y-auto p-5 gap-4">

        {/* ── Info card ── */}
        <div
          className="flex flex-col gap-5 px-5 py-5"
          style={{
            background: '#ffffff',
            borderRadius: '10px',
            border: '0.5px solid rgba(0,0,0,0.08)',
            boxShadow: '0 1px 2px rgba(0,0,0,0.02)',
          }}
        >
          {/* Headline + badge */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-col gap-1.5">
              <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: '#8e8e93' }}>
                Open to opportunities
              </p>
              <h1
                className="text-[22px] font-bold leading-tight"
                style={{ color: '#1d1d1f', letterSpacing: '-0.02em' }}
              >
                Let's build something<br />
                <span style={{ color: '#86868b', fontWeight: 500 }}>together.</span>
              </h1>
            </div>

            <div
              className="flex items-center gap-2 px-2.5 py-1 shrink-0 cursor-default"
              style={{
                borderRadius: '6px',
                background: '#f2fdf5',
                border: '0.5px solid rgba(52, 199, 89, 0.3)',
              }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
              </span>
              <span className="text-[11px] font-medium whitespace-nowrap" style={{ color: '#34c759' }}>
                Available
              </span>
            </div>
          </div>

          {/* Email row — click to copy */}
          <button
            onClick={handleCopy}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group w-full text-left"
            style={{
              background: copied ? '#f2fdf5' : 'transparent',
              border: copied ? '0.5px solid rgba(52,199,89,0.25)' : '0.5px solid transparent',
            }}
          >
            {/* Icon */}
            <div
              className="w-8 h-8 rounded-md flex items-center justify-center shrink-0 shadow-sm transition-colors duration-300"
              style={{ background: copied ? '#34c759' : '#ff3b30' }}
            >
              {copied ? (
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              )}
            </div>

            {/* Text */}
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-[11px] font-medium" style={{ color: '#8e8e93' }}>Email</span>
              <span
                className="text-[13px] font-medium truncate transition-colors duration-200"
                style={{ color: copied ? '#34c759' : '#1d1d1f' }}
              >
                {copied ? 'Copied to clipboard!' : EMAIL}
              </span>
            </div>

            {/* Copy hint */}
            <div
              className="shrink-0 transition-all duration-200"
              style={{ opacity: copied ? 0 : 1 }}
            >
              <svg className="w-3.5 h-3.5 opacity-20 group-hover:opacity-50 transition-opacity" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
              </svg>
            </div>
          </button>
        </div>

        {/* ── Socials ── */}
        <div className="flex flex-row flex-wrap sm:flex-nowrap gap-3 min-h-0">
          {socials.map(({ id, bg, link, icon, text }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex flex-col items-center justify-center gap-2.5 grow p-4 overflow-hidden"
              style={{
                background: bg,
                borderRadius: '10px',
                border: '0.5px solid rgba(0,0,0,0.1)',
                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm"
                style={{ background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(5px)' }}
              >
                <Image src={icon} alt={text} width={22} height={22} className="w-5 h-5 object-contain drop-shadow-sm" />
              </div>
              <span className="text-[12px] font-medium text-white tracking-wide drop-shadow-sm">
                {text}
              </span>
            </a>
          ))}
        </div>

      </div>
    </div>
  )
}

const ContactWindow = WindowWrapper(Contact, 'contact')
export default ContactWindow