
import React from "react";
import { Download, CheckCircle2, Heart } from "lucide-react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaBootstrap,
  FaSass,
  FaPhp,
  FaLaravel,
  FaFigma,
  FaGithub,
} from "react-icons/fa";
import { TbBrandAdobeIllustrator } from "react-icons/tb";

import {
  SiMui,
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";
import { TbBrandAdobePhotoshop } from "react-icons/tb";
import { FaPaintbrush } from "react-icons/fa6";

import "./AboutSkills.scss";
import aboutimg from "./aboutimg.png"

const defaultSkills = {
  title: "Skills & Stack",
  skillslist: [
  {
    icon: <FaHtml5 />,
    name: "HTML5",
  },
  {
    icon: <FaCss3 />,
    name: "CSS3",
  },
  {
    icon: <FaJs />,
    name: "JavaScript",
  },
  {
    icon: <FaReact />,
    name: "React.js",
  },
  {
    icon: <FaWordpress />,
    name: "WordPress",
  },
  {
    icon: <FaBootstrap />,
    name: "Bootstrap",
  },
  {
    icon: <SiMui />,
    name: "Material UI",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
  },
  {
    icon: <FaSass />,
    name: "Sass",
  },
  {
    icon: <FaPhp />,
    name: "PHP",
  },
  {
    icon: <FaLaravel />,
    name: "Laravel",
  },
  {
    icon: <SiMysql />,
    name: "MySQL",
  },
  {
    icon: <FaFigma />,
    name: "Figma",
  },
  {
    icon: <TbBrandAdobePhotoshop />,
    name: "Adobe Photoshop",
  },
  {
    icon: <TbBrandAdobeIllustrator />,
    name: "Adobe Illustrator",
  },
  {
  icon: <FaPaintbrush />,
  name: "Canva",
},
  {
    icon: <FaGithub />,
    name: "GitHub",
  },
],
};

const highlights = [
  "Problem solver by nature",
  "Clean, scalable and maintainable code",
  "Passionate about performance & UX",
];

export default function AboutSkills({
  skills = defaultSkills,
  name = "Karthikeyan",
  profileImage = aboutimg,
//   resumeUrl = "/resume.pdf",
}) {
  return (
    <section className="about-skills" id="about">
      {/* ABOUT PANEL */}
      <article className="about-panel">
        <div className="about-profile">
          <img src={profileImage} alt={`${name} - Developer`} />
          <span className="profile-signature">{name}</span>
        </div>

        <div className="about-content">
          <div className="panel-label theme-color">
            <p>About Me</p>
          </div>

          <h2>
            Building solutions
            <br />
            with code &amp; <span>creativity.</span>
          </h2>

          <p className="about-description">
            I m a passionate Front-End Developer with 5+ years of
            experience building web applications and digital products.
            I love turning ideas into reality through clean code and
            user-centered design.
          </p>

          <ul className="about-highlights">
            {highlights.map((item) => (
              <li key={item}>
                <CheckCircle2 size={13} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a
            className="download-cv"
            // href={resumeUrl}
            download
          >
            Download CV
            <Download size={15} />
          </a>
        </div>
      </article>
      <article className="skills-panel" id="skills">
        <div className="panel-label">
          <p>{skills.title || "Skills & Stack"}</p>
        </div>

        <div className="skills-grid">
          {skills.skillslist.map((item, index) => (
            <div
              className="skill-card"
              key={item.name || index}
              title={item.name}
            >
              <div className={`skill-icon skill-icon-${index % 8}`}>
                {typeof item.icon === "string" ? (
                  <span>{item.icon}</span>
                ) : (
                  item.icon
                )}
              </div>

              <h3>{item.name}</h3>
            </div>
          ))}
          
        </div>

      </article>
    </section>
  );
}
