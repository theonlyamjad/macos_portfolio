"use client";
import { Navbar, Welcome, Dock, HomeDesktop } from "./components";
import { Draggable } from "gsap/Draggable";
import { gsap } from "gsap";
import { Terminal, Finder, Text, Image, Contact, Photos } from "@/windows";
import dynamic from "next/dynamic";

gsap.registerPlugin(Draggable);

const Resume = dynamic(() => import("@/windows/Resume"), { ssr: false });

export default function Home() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Photos />
      <HomeDesktop />
    </main>
  );
}