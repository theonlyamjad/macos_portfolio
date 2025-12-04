"use client"
import React from 'react'
import WindowControls from '@/app/components/WindowControl'
import WindowWrapper from '@/hoc/WindowWrapper'
import { ChevronRight, ChevronLeft, PanelLeft, ShieldHalf, Search ,Share, Plus, Copy } from 'lucide-react'
import { blogPosts } from '@/constants'
import Image from 'next/image'

const Safari = () => {
  return (
    <>
        <div id="window-header">
            <WindowControls target="safari"/>

           <PanelLeft className="ml-10 icon" /> 
           <div className="flex items-center gap-1 ml-5">
            <ChevronLeft className="icon" />
            <ChevronRight className="icon" />
           </div>
            <div className="flex-1 flex-center gap-3">
                <ShieldHalf className="icon" />
            </div>
            <div className="search">
                <Search className="icon" />
                <input type="text" placeholder="Search or enter a website name" className="flex-1"/>
                
            </div>
        </div>
        <div className="flex items-center gap-5">
            <Share className="icon" />
            <Plus className="icon" />
            <Copy className="icon" />
        </div>
        <div className="blog">
            <h2>My Blog</h2>
            <div className="space-y-8">
                {blogPosts.map(({id,date,title,image,link}) => (
                    <div key={id} className="blog-post">
                        <div className="col-span-2">
                            <Image 
                                src={image}
                                alt={title}
                                width={100}
                                height={100}  
                            />
                        </div>
                        <div className="content">
                            <p>{date}</p>
                            <h3>{title}</h3>
                            <a href={link} target="_blank" rel="noopener noreferrer">Check out the full post</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

const SafariWindow = WindowWrapper(Safari,'safari');

export default SafariWindow
