"use client";

// import Image from "next/image";

import { motion } from "motion/react";
import { Fade } from "react-awesome-reveal";

// import heroImg from "@/app/assets/home/hero/engine.png";
import VantaBackground from "./components/vanta-background";

export default function Home() {
  return (
    <>
      <VantaBackground>
        <div className="relative container h-screen flex flex-col items-center justify-center mx-auto z-[1] overflow-hidden">
          {/* <VantaBackground style="absolute inset-0 bg-white w-full h-screen flex items-center justify-center m-auto text-black -z-[1]"></VantaBackground> */}

          <motion.h1
            initial={{ fontSize: "5em", y: 0 }}
            animate={{ fontSize: "4em", y: "-150%" }}
            transition={{ delay: 1.2, duration: 0.6, ease: "easeIn" }}
            className="absolute inset-0 h-fit m-auto font-semibold text-center uppercase leading-tight"
          >
            Experience the <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Fade cascade damping={1e-1} triggerOnce>
                Innovation
              </Fade>
            </motion.span>
          </motion.h1>
          {/* <Image src={heroImg} alt="A plane engine" className="object-contain" /> */}
        </div>
      </VantaBackground>
      <div className="bg-white h-screen"></div>
    </>
  );
}
