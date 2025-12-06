"use client"

import WindowWrapper from "@/hoc/WindowWrapper";
import WindowControl from "@/app/components/WindowControl";
import { photosLinks, gallery } from "@/constants";
import useWindowStore from "@/store/window";
import Image from "next/image";
import {Mail,Search} from "lucide-react";

const Photos = () => {

    const {openWindow} = useWindowStore();

  return (
    <>
      <div id="window-header">
            <WindowControl target="photos" />
            <div className="w-full flex justify-end items-center gap-3 text-gray-500">
                <Mail className="icon" />
                <Search className="icon" />
            </div>
      </div>

        <div className="flex w-full">
            <div className="sidebar">
                <h2>Photos</h2>
                <ul>
                    {photosLinks.map(({id,icon,title}) => (
                        <li key={id}>
                            <Image 
                                src={icon}
                                alt={title}
                                width={18}
                                height={18}
                            />
                            <p>{title}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="gallery">
                <ul>
                    {gallery.map(({id,img})=>(
                        <li key={id} onClick={()=>openWindow("imgfile",{
                            id,
                            name:"Gallery image",
                            icon:"/images/image.png",
                            kind:"file",
                            fileType:"img",
                            imageUrl:img,
                        })}>
                            <Image
                                src={img}
                                alt={`Gallery image ${id}`}
                                width={250}
                                height={150}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </>
  )
}

const PhotosWindow = WindowWrapper(Photos, 'photos')
export default PhotosWindow
