import React from "react";
import { motion} from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaWordpress,
  FaBootstrap,
  FaSass,
  FaPhp,
  FaLaravel,
  FaFigma,
  FaGithub,
  FaPaintBrush,
} from "react-icons/fa";

import { SiMui, SiTailwindcss, SiMysql } from "react-icons/si";

import { TbBrandAdobePhotoshop, TbBrandAdobeIllustrator } from "react-icons/tb";

import dotimg from "./../../../public/dot-img.svg";
import "./Skills.scss";

const defaultSkills = {
  title: "Skills & Stack",
  skillslist: [
    { icon: FaHtml5, name: "HTML5", color: "#E34F26" },
    { icon: FaCss3Alt, name: "CSS3", color: "#1572B6" },
    { icon: FaJs, name: "JavaScript", color: "#F7DF1E" },
    { icon: FaReact, name: "React.js", color: "#61DAFB" },
    { icon: FaWordpress, name: "WordPress", color: "#21759B" },
    { icon: FaBootstrap, name: "Bootstrap", color: "#7952B3" },
    { icon: SiMui, name: "Material UI", color: "#007FFF" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
    { icon: FaSass, name: "Sass", color: "#CC6699" },
    { icon: FaPhp, name: "PHP", color: "#777BB4" },
    { icon: FaLaravel, name: "Laravel", color: "#FF2D20" },
    { icon: SiMysql, name: "MySQL", color: "#4479A1" },
    { icon: FaFigma, name: "Figma", color: "#F24E1E" },
    { icon: TbBrandAdobePhotoshop, name: "Photoshop", color: "#31A8FF" },
    { icon: TbBrandAdobeIllustrator, name: "Illustrator", color: "#FF9A00" },
    { icon: FaPaintBrush, name: "Canva", color: "#00C4CC" },
    { icon: FaGithub, name: "GitHub", color: "#bfbfbf" },
  ],
};

const Skills = (skills = defaultSkills) => {
  return (
    <div className="skillssection py-5 relative">
      <div className="bg-dot-left">
        <img src={dotimg} alt="Skills" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 order-lg-1 order-1">
            <motion.div className="skills-content " initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.4 }}>
              <div className="title-content">
                <span className="title-badge">My Skills</span>
                <h2>Technologies I worked with.</h2>
              </div>
              {/* <h2>About me</h2> */}
              <div className="">
                <p>
                  I have hands-on experience with modern web technologies and
                  frameworks.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-8 order-lg-2 order-2 pt-5 pt-lg-0">
            <article className="skills-panel" id="skills">
              {/* <div className="panel-label">
                <p>{skills?.title || "Skills & Stack"}</p>
              </div> */}

              <motion.div className="skills-grid-new" initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.4 }}>
                {defaultSkills.skillslist.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div className="skill-card-new" key={item.name || index}>
                      <div className="skill-icon">
                        <Icon style={{ color: item.color }} />
                      </div>

                      <h3>{item.name}</h3>
                    </div>
                  );
                })}
              </motion.div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
