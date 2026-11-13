import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Gem, Zap, Heart } from "lucide-react";

import aboutimg from "./aboutimg.png";
import "./About.scss";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
const highlights = [
  {
    id: 1,
    title: "Creative",
    subtitle: "Developer",
    icon: Gem,
  },
  {
    id: 2,
    title: "Problem",
    subtitle: "Solver",
    icon: Zap,
  },
  {
    id: 3,
    title: "Tech",
    subtitle: "Enthusiast",
    icon: Heart,
  },
];
const Aboutnew = () => {
  return (
    // <div className="aboutsection" id="about">
    //   <div className="container">
    //     <div className="row justify-content-between align-items-center ">
    //       <motion.div
    //         className="col-lg-6 col-md-12 col-12 order-md-2 order-1 pt-5 pt-lg-0"
    //         initial={{ y: 50, opacity: 0 }}
    //         whileInView={{ y: 0, opacity: 1 }}
    //         transition={{ duration: 0.8, ease: "easeOut" }}
    //         viewport={{ once: false, amount: 0.4 }}
    //       >
    //         <div className="about-content text-left">
    //           <div className="title-section mb-5 mx-0  text-start">
    //             <h6 className="theme-color">About me</h6>
    //             <h1>About me </h1>
    //           </div>
    //           {/* <h2>About me</h2> */}
    //           <div className="">
    //             <p>
    //               I m a passionate Front-End Developer with 5+ years of
    //               experience building modern, responsive, and user-friendly web
    //               applications. I specialize in React.js, JavaScript, HTML5,
    //               CSS3, and Tailwind CSS. I enjoy transforming creative designs
    //               into interactive and pixel-perfect web experiences. I also
    //               have experience with PHP, Laravel, CodeIgniter, WordPress, and
    //               MySQL. I'm always eager to learn new technologies and build
    //               innovative digital solutions that deliver great user
    //               experiences.
    //             </p>
    //           </div>
    //           <div className="developer-highlights">
    //             <div className="highlights-container">
    //               {highlights.map((item) => {
    //                 const Icon = item.icon;

    //                 return (
    //                   <div className="highlight-card" key={item.id}>
    //                     <div className="highlight-icon">
    //                       <Icon size={34} strokeWidth={2.2} />
    //                     </div>

    //                     <div className="highlight-content">
    //                       <span>{item.title}</span>
    //                       <span>{item.subtitle}</span>
    //                     </div>
    //                   </div>
    //                 );
    //               })}
    //             </div>
    //           </div>
    //           <div className="about-links">
    //             <a href="tel:+918072217943">
    //               <span>
    //                 {" "}
    //                 <FaPhoneAlt />
    //               </span>
    //               8072217943
    //             </a>
    //             <a href="tel:+919944658008">
    //               <span>
    //                 <FaPhoneAlt />
    //               </span>
    //               9944658008
    //             </a>
    //             <a href="mailto:vijayakarthik13@gmail.com">
    //               <span>
    //                 <FaEnvelope />
    //               </span>
    //               vijayakarthik13@gmail.com
    //             </a>
    //           </div>
    //         </div>
    //       </motion.div>
    //       <motion.div
    //         className="col-lg-5 col-md-12 col-12 order-md-1 order-2"
    //         initial={{ y: 50, opacity: 0 }}
    //         whileInView={{ y: 0, opacity: 1 }}
    //         transition={{ duration: 0.8, ease: "easeOut" }}
    //         viewport={{ once: false, amount: 0.4 }}
    //       >
    //         <div className="about-img mt-5 mt-md-0">
    //           <img src={aboutimg} alt="img" />
    //         </div>
    //       </motion.div>
    //     </div>
    //   </div>
    // </div>

    <div className="aboutsection1" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12 order-md-1 order-2" >
            {" "}
            <motion.div
              className="about-left"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <h1 className="background-text">
                ABOUT
                <br />
                ME
              </h1>

              <div className="about-img">
                <div className="neon-frame"></div>
                <img src={aboutimg} alt="Profile" />
              </div>
            </motion.div>
          </div>
          <div className="col-lg-6 col-md-12 col-12 order-md-2 order-1">
            <motion.div
              className="about-content"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <div className="title-content">
                <span className="title-badge">About Me</span>

                <h2>Turning ideas into Reality.</h2>
              </div>

              <p>
                I m a passionate Front-End Developer with 5+ years of experience
                building modern, responsive, and user-friendly web applications.
                I specialize in React.js, JavaScript, HTML5, CSS3, and Tailwind
                CSS. I enjoy transforming creative designs into interactive and
                pixel-perfect web experiences. I also have experience with PHP,
                Laravel, CodeIgniter, WordPress, and MySQL. I'm always eager to
                learn new technologies and build innovative digital solutions
                that deliver great user experiences.
              </p>

              <a href="#portfolio" className="explore-btn">
                Explore My Work
                <span>→</span>
              </a>

              <div className="signature">
                <span>Karthik V</span>
                <div></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Left side */}

        {/* Right side */}
      </div>
    </div>
  );
};

export default Aboutnew;
