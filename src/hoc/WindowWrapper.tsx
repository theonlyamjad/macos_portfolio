"use client"
import useWindowStore from "@/store/window"
import { Component } from "lucide-react"
import { useLayoutEffect, useRef } from "react"
import {useGSAP} from "@gsap/react"
import { gsap } from "gsap"
import Draggable from "gsap/Draggable"

gsap.registerPlugin(Draggable)

const WindowWrapper = (components:any,windowKey:any ) => {
    
    const Wrapped = (props:any) =>{
        const {focusWindow,windows} = useWindowStore();
        const {isOpen,zIndex} = windows[windowKey];
        const ref = useRef<HTMLDivElement>(null);

        useGSAP(()=>{
            const el = ref.current;
            if(!el || !isOpen) return;

            el.style.display = "block";
        },[isOpen]);

        useGSAP(()=>{
            const el = ref.current;
            if(!el) return;

            const [instance] = Draggable.create(el, {onPress:()=> focusWindow(windowKey)});
        })

        useLayoutEffect(()=>{
            const el = ref.current;
            if(!el) return; 
            el.style.display = isOpen ? "block" : "none";

            gsap.fromTo(
                el,
                {scale:0.8,opacity:0.3,y:40},
                {scale:1,opacity:1,duration:0.4,ease:"power3.out"}
            )
        },[isOpen]);
        
        return (
            <section
            id={windowKey}
            ref={ref}
            style={{zIndex}}
            className="absolute"
            >
                <Component {...props}/>
            </section>
        )
    }
    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;
    return Wrapped;
}

export default WindowWrapper
