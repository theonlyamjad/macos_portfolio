"use client"
import WindowWrapper from "@/hoc/WindowWrapper"
import WindowControl from '@/app/components/WindowControl'
import useWindowStore from "@/store/window"
import Image from "next/image"

const Text = () => {
    const data = useWindowStore((state) => state.windows["txtfile"]?.data)
    console.log('3. Text rendered, data:', data)

    return (
        <>
            <div id="window-header">
                <WindowControl target="txtfile"/>
                <h2>{data?.name ?? "File"}</h2>
            </div>

            <div className="p-5 space-y-6 bg-white">
                {!data ? (
                    <p className="text-black text-sm">No data loaded.</p>
                ) : (
                    <>
                        {data.image && (
                            <div className="w-full">
                                <Image 
                                    src={data.image}
                                    alt={data.name}
                                    width={500}
                                    height={300}
                                    className="w-full h-auto rounded"
                                />
                            </div>
                        )}
                        {data.subtitle && (
                            <h3 className="text-lg font-semibold">{data.subtitle}</h3>
                        )}
                        {Array.isArray(data.description) && data.description.length > 0 && (
                            <div className="space-y-3 leading-relaxed text-base text-gray-800">
                                {data.description.map((para: string, idx: number) => (
                                    <p key={idx}>{para}</p>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    )
}

const TextWindow = WindowWrapper(Text, 'txtfile')
export default TextWindow