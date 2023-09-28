"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TabData = [
  {
    title: "Habilidades",
    id: "skills",
    content: (
      <div className="flex flex-row gap-10">
        <ul className="list-disc pl-2">
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>NodeJs</li>
        </ul>
        <ul className="list-disc">
          <li>React</li>
          <li>NextJs</li>
          <li>Sequelize</li>
          <li>Git</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Educacion",
    id: "education",
    content: (
      <p>
        Egresado en el año 2023 como Ingeniero Civil Informatico de la
        Universidad San Sebastian.{" "}
      </p>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-40 sm:py-16 xl:px-16">
        <Image src={"/images/about.png"} width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Acerca de Mi</h2>
          <p className="text-base lg:text-lg">
            Soy un desarrollador full stack, egresado de inengria civil
            informatica. Me apasiona crear aplicativos web interactivos y que
            brinden buena experiencia al usuario. Tengo experiencia trabajando
            con javaScript, HTML, CSS, React, NextJs, NodeJs, Sequelize, Git,
            BBDD relacionales y no relacionales. Dispuesto a trabajar en equipo,
            aprender, mejorar y pulir mis habilidades técnicas y blandas.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Habilidades
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Educacion
            </TabButton>
          </div>
          <div className="mt-8">
            {TabData.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
