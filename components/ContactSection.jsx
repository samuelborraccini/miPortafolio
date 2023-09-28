"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ContactSection = () => {
  const [copy, setCopy] = useState(false);

  const handleCopyClick = () => {
    setCopy(true);
    navigator.clipboard.writeText("samuelborraccini@gmail.com");
    setTimeout(() => setCopy(false), 3000);
  };
  return (
    <>
      <div className="flex justify-between items-top px-20 mb-4">
        <div className="relative">
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-500 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute -top-1 right-20 transform -translate-x-1/2 -translate-1/2"></div>
          <h2 className="text-4xl font-bold text-white mb-4">Contactame</h2>
          <p className="text-[#ADB7BE] flex gap-2">
            SamuelBorraccini@gmail.com
            <Image
              src={copy ? "/icons/tick.svg" : "/icons/copy.svg"}
              width={12}
              height={12}
              onClick={handleCopyClick}
              className="cursor-pointer"
            />
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">Mis Redes</h2>
          <p className="text-[#ADB7BE] max-w-md mb-6">
            Actualmente estoy buscando oportunidades laborales, me puedes
            contactar mediante mi correo electronico o mis redes de trabajo que
            aparecen a continuacion. Me comunicare devuelta lo mas pronto
            posible!
          </p>
          <div className="flex gap-6">
            <Link
              href={"https://github.com/samuelborraccini/samuelborraccini"}
              target="blank"
            >
              <Image
                className="hover:shadow-slate-500/50 shadow-lg rounded-full duration-200"
                src={"/icons/github.svg"}
                width={32}
                height={32}
              />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/samuel-borraccini-939146248/"}
              target="blank"
              className="shadow-white"
            >
              <Image
                src={"/icons/linkedIn.svg"}
                width={32}
                height={32}
                className="hover:shadow-blue-500/50 shadow-lg rounded-full duration-200"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
