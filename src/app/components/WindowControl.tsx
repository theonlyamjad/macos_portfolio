import React, { use } from 'react'
import useWindowStore from '@/store/window'

const WindowControl = ({target}:any) => {
  const {closeWindow}= useWindowStore();
  return (
    <div id="window-controls">
      <div className="close" onClick={()=>closeWindow(target)} />
      <div className="minimize" />
      <div className="maximize" />
    </div>
  )
}

export default WindowControl
