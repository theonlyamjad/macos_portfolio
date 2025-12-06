
import { Navbar, Welcome ,Dock,HomeDesktop } from "./components";
import { Draggable } from "gsap/Draggable";
import { gsap } from "gsap";
import {Terminal,Safari,Resume,Finder,Text,Image,Contact,Photos} from "@/windows";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(Draggable);

export default function Home() {

  return (
    <main>
      <Navbar />
      <Welcome/>
      <Dock/>
      <Terminal/>
      <Safari/>
      <Resume/>
      <Finder/>
      <Text/>
      <Image/>
      <Contact/>
      <Photos/>
      <HomeDesktop/>

    </main>
  );
}
