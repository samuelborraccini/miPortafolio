"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./projectTag";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Ecommerce",
    description:
      "Pagina web para una empresa que comercializa paquetes de conectividad a internet.",
    tag: ["All", "Web"],
    image: "/images/ecommerce.png",
    gitUrl: "https://github.com/samuelborraccini/pagina-ecommerce",
  },
  {
    id: 2,
    title: "Prompts Share",
    description:
      "Aplicativo web para compartir prompts de IA con autentificacion de usuario via Gmail.",
    tag: ["All", "Web"],
    image: "/images/promptsShare.png",
    gitUrl: "https://github.com/samuelborraccini/sharePrompts",
  },
  {
    id: 3,
    title: "Users Api",
    description:
      "Este proyecto fue creado para demostrar funcionalidad de conexion a bases de datos con ORM, encriptacion de contraseñas, autentificacion de usuario, autorizacion de rutas, CRUD usuarios, tokenizacion y seteo de cookies.",
    tag: ["All", "Api"],
    image: "/images/api.png",
    gitUrl: "https://github.com/samuelborraccini/user-api",
  },
  {
    id: 4,
    title: "ShowRoom",
    description:
      "Pagina web de prueba, creada para empresa de moda que busca promover nuevo calzado.",
    tag: ["All", "Web"],
    image: "/images/showRoom.png",
    gitUrl: "https://github.com/samuelborraccini/proyecto-showroom",
  },
  {
    id: 5,
    title: "Weather App",
    description:
      "Aplicacion web creada para conocer el estado del tiempo a nivel mundial, haciendo uso de una Api de geolocalizacion OpenWeatherApp y Open-Meteo.",
    tag: ["All", "Web"],
    image: "/images/weatherApp.png",
    gitUrl: "https://github.com/samuelborraccini/react-weatherApp",
  },
];

const ProjectSection = () => {
  const [selected, setSelected] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleSelect = (tab) => {
    setSelected(tab);
  };

  const filteredProjects = projects.filter((item) =>
    item.tag.includes(selected)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Mis Proyectos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-10">
        <ProjectTag
          name={"All"}
          onClick={handleSelect}
          isSelected={selected === "All"}
        />
        <ProjectTag
          name={"Web"}
          onClick={handleSelect}
          isSelected={selected === "Web"}
        />
        <ProjectTag
          name={"Api"}
          onClick={handleSelect}
          isSelected={selected === "Api"}
        />
      </div>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16" ref={ref}>
        {filteredProjects.map((i, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: index * 0.4 }}
          >
            <ProjectCard
              title={i.title}
              imageUrl={i.image}
              description={i.description}
              gitUrl={i.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
