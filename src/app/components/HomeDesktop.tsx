"use client"
import { locations } from "@/constants"
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import useWindowStore from "@/store/window";
import useLocationStore from "@/store/location";
import clsx from "clsx";
import Image from "next/image"

const projects = locations.work?.children?? [];

const Home = () => {

    const {openWindow} = useWindowStore();
    const {setActiveLocation} = useLocationStore() as any;

    const handleOpenProjectFinder = (project:any) => {
        setActiveLocation(project);
        openWindow("finder");
    }

    useGSAP(()=>{
        Draggable.create(".folder");
    },[]);

  return (
    <section id="home">
        <ul>
            {projects.map((project) =>(
                <li key={project.id} className={clsx("group folder",project.windowPosition)}>
                    <Image
                    src="/images/folder.png"
                    alt={project.name}
                    width={50}
                    height={50}
                    />
                    <p>{project.name}</p>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default Home
