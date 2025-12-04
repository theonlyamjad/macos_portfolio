
import { Navbar, Welcome ,Dock } from "./components";
import { Draggable } from "gsap/Draggable";
import { gsap } from "gsap";
import Terminal from "../windows/Terminal";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(Draggable);

export default function Home() {

  return (
    <main>
      <Navbar />
      <Welcome/>
      <Dock/>
      <Terminal/>
    </main>
  );
}
