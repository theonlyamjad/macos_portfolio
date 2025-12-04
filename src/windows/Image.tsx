"use client"
import WindowWrapper from "@/hoc/WindowWrapper"
import WindowControl from '@/app/components/WindowControl'
import useWindowStore from "@/store/window"
import Image from "next/image"


const ImageFile = () => {

    const { windows } = useWindowStore()
    const data = windows.imgfile?.data

    if (!data) return null

    const { name, imageUrl } = data

    return (
        <>
            <div id="window-header">
                <WindowControl target="imgfile" />
                <h2>{name}</h2>
            </div>

            <div className="p-5 bg-white">
                {imageUrl ? (
                    <div className="w-full">
                        <Image
                            src={imageUrl}
                            alt={name}
                            width={800}
                            height={600}
                            className="w-full h-auto max-h-[70vh] object-contain rounded"
                        />
                    </div>
                ) : null}
            </div>
        </>
    )
}

const ImageWindow = WindowWrapper(ImageFile, 'imgfile')

export default ImageWindow