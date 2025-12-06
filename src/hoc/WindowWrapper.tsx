"use client"
import useWindowStore from "@/store/window"
import { useLayoutEffect, useRef } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import Draggable from "gsap/Draggable"

gsap.registerPlugin(Draggable)

const WindowWrapper = (WrappedComponent: any, windowKey: any) => {

    const Wrapped = (props: any) => {
        const { focusWindow, windows } = useWindowStore()
        const { isOpen, zIndex } = windows[windowKey]
        const ref = useRef<HTMLDivElement>(null)

        // Handle display visibility
        useLayoutEffect(() => {
            const el = ref.current
            if (!el) return
            
            el.style.display = isOpen ? "block" : "none"
        }, [isOpen])

        // Handle entrance animation only when opening
        useGSAP(() => {
            const el = ref.current
            if (!el || !isOpen) return

            gsap.fromTo(
                el,
                { scale: 0.8, opacity: 0.3, y: 40 },
                { scale: 1, opacity: 1, duration: 0.4, ease: "power3.out" }
            )
        }, [isOpen])

        // Setup draggable
        useGSAP(() => {
            const el = ref.current
            if (!el || !isOpen) return

            Draggable.create(el, {
                onPress: () => focusWindow(windowKey),
                bounds: window
            })
        }, [isOpen, windowKey])

        return (
            <section
                id={windowKey}
                ref={ref}
                style={{
                    zIndex,
                    display: isOpen ? "block" : "none"
                }}
                className="absolute"
            >
                <WrappedComponent {...props} />
            </section>
        )
    }

    Wrapped.displayName = `WindowWrapper(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`
    return Wrapped
}

export default WindowWrapper