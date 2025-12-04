"use client"
import WindowControls from '@/app/components/WindowControl'
import { Search } from 'lucide-react'
import { locations } from '@/constants'
import clsx from 'clsx'
import Image from 'next/image'
import useLocationStore from '@/store/location'
import useWindowStore from '@/store/window'

const Finder = () => {
    const { openWindow } = useWindowStore()
    const { activeLocation, setActiveLocation } = useLocationStore() as any

    const openItem = (item: any) => {
        if (item.fileType === 'pdf') return openWindow('resume')
        if (item.kind === 'folder') return setActiveLocation(item)
        if (['fig', 'url'].includes(item.fileType) && item.href)
            return window.open(item.href, "_blank")

        openWindow(`${item.fileType}${item.kind}`, item)
    }

    const renderList = (name: any, items: any) => (
        <div className="">
            <h3>{name}</h3>
            <ul>
                {items.map((item: any) => (
                    <li key={item.id} onClick={() => setActiveLocation(item)}>
                        <Image
                            src={item.icon}
                            alt={item.name}
                            width={50}
                            height={50}
                            className={clsx(item.id === activeLocation.id ? "active" : "not-active")}
                        />
                        <p className="text-sm font-medium truncate">{item.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )

    return (
        <>
            <div id='window-header' className="">
                <WindowControls target="finder" />
                <Search className="icon" />
            </div>
            <div className="bg-white flex h-full">
                <div className="sidebar">
                    {renderList('Favorites', Object.values(locations))}
                    {renderList('Work', locations.work.children)}
                </div>
                <ul className='content'>
                    {activeLocation?.children.map((item: any) => (
                        <li key={item.id} className={item.position} onClick={() => openItem(item)}>
                            <Image
                                src={item.icon}
                                alt={item.name}
                                width={64}
                                height={64}
                            />
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Finder