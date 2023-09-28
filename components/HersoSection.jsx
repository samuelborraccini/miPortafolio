"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HersoSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500  to-green-500">
              Hola, soy Samuel
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Software Engenieer",
                1000,
                "Full Stack Developer",
                1000,
                "Computer Analyst",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] sm:text-lg lg:text-xl mb-6 text-base ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
            explicabo natus commodi impedit nobis omnis in sit optio quisquam
            eum, ab, voluptates molestiae quibusdam eos ratione aliquid, autem
            ad doloribus.
          </p>
          <div>
            <button className="px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-blue-500  to-green-500  text-white w-full sm:w-fit">
              Contratame
            </button>
            <button className="px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3 w-full sm:w-fit">
              Descarga mi CV
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/heroImage.png"
              alt="hero Image"
              width={300}
              height={500}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HersoSection;
