"use client"
import WindowControl from "@/app/components/WindowControl"
import { techStack } from "@/constants"
import WindowWrapper from "@/hoc/WindowWrapper"
import { Check, Flag, Folder } from "lucide-react"

const Terminal = () => {
  const totalStacks = techStack.length

  return (
    <div
      className="flex flex-col h-full overflow-hidden relative"
      style={{
        background: '#1e1e1e', // Standard macOS dark terminal background
        borderRadius: '12px',
        border: '0.5px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 20px 60px -10px rgba(0, 0, 0, 0.5), 0 0 0 0.5px rgba(255, 255, 255, 0.1) inset',
      }}
    >
      {/* ── Title bar ── */}
      <div
        id="window-header"
        className="flex items-center h-[52px] px-4 shrink-0 select-none relative"
        style={{
          background: 'rgba(45, 45, 45, 0.95)',
          backdropFilter: 'blur(20px) saturate(150%)',
          WebkitBackdropFilter: 'blur(20px) saturate(150%)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.5)',
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
        }}
      >
        <div className="absolute left-4 flex items-center h-full">
          <WindowControl target="terminal" />
        </div>
        
        <div className="flex-1 flex justify-center pointer-events-none">
          <span
            className="text-[13px] font-semibold tracking-wide flex items-center gap-1.5"
            style={{ color: '#d1d1d1' }}
          >
            <Folder size={14} className="text-blue-400 fill-blue-400" />
            amjad — -zsh
          </span>
        </div>
      </div>

      {/* ── Terminal Body ── */}
      <div 
        className="flex flex-col flex-1 overflow-y-auto p-4 gap-4 text-[13px] leading-relaxed"
        style={{
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          color: '#e4e4e4',
        }}
      >
        {/* Command Input Line */}
        <div className="flex gap-2 items-center">
          <span className="font-semibold" style={{ color: '#4ade80' }}>amjad@MacBook-Pro</span>
          <span className="font-semibold" style={{ color: '#60a5fa' }}>~</span>
          <span className="font-semibold text-white">%</span>
          <span>show tech stack</span>
        </div>

        {/* Output Table Header */}
        <div className="flex gap-4 border-b border-neutral-700 pb-1 mt-2 text-neutral-400 font-bold uppercase tracking-wider text-[11px]">
          <div className="w-32 shrink-0">Category</div>
          <div>Technologies</div>
        </div>

        {/* Output List */}
        <ul className="flex flex-col gap-2 mt-1">
          {techStack.map(({ category, items }) => (
            <li key={category} className="flex items-start gap-4">
              <div className="w-32 shrink-0 flex items-center gap-2 font-semibold">
                <span className="text-green-400">➜</span> {category}
              </div>

              <div className="flex flex-wrap text-neutral-300">
                {items.join(', ')}
              </div>
            </li>
          ))}
        </ul>

        {/* Footnote / Logs */}
        <div className="mt-4 pt-3 border-t border-neutral-800 flex flex-col gap-1.5 text-[12px] text-neutral-500">
          <p className="flex items-center gap-2">
            <Check size={14} className="text-green-500" />
            {totalStacks} of {totalStacks} stacks loaded successfully
          </p>

          <p className="flex items-center gap-2">
            <Flag size={14} className="text-blue-400" /> 
            Render time: 6ms
          </p>
        </div>

        {/* New Line Waiting for Input */}
        <div className="flex gap-2 items-center mt-2">
          <span className="font-semibold" style={{ color: '#4ade80' }}>amjad@MacBook-Pro</span>
          <span className="font-semibold" style={{ color: '#60a5fa' }}>~</span>
          <span className="font-semibold text-white">%</span>
          {/* Blinking Terminal Cursor */}
          <span className="w-2 h-[15px] bg-neutral-400 animate-pulse inline-block align-middle ml-1"></span>
        </div>
      </div>
    </div>
  )
}

const TerminalWindow = WindowWrapper(Terminal, "terminal")
export default TerminalWindow