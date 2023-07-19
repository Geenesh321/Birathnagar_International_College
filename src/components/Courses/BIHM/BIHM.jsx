import React from "react";
import "./BIHM.scss";
import NavBar from "../../NavBar/NavBar";
import Module from './Module/Module'
import Group from '../Group/Group'

import { ScrollTrigger } from "gsap/all";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import Footer from "../../Footer/Footer";
const BIHM = () => {
    const imageRef = useRef(null);
    const anotherRef = useRef(null);
    const anotherRef2 = useRef(null);
    const anotherRef3 = useRef(null);
    const anotherRef4 = useRef(null);

    useLayoutEffect(()=>{
        const el1 = imageRef.current;
        const el2 = anotherRef.current;
        const el3 = anotherRef2.current;
        const el4 = anotherRef3.current;
        const el5 = anotherRef4.current;
        const animation1 = gsap.fromTo(
            el1,
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "linear",
            }
          );
      
          const animation2 = gsap.fromTo(
            el2,
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "linear",
            }
          );
      
          const animation3 = gsap.fromTo(
            el3,
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.inOut",
            }
          );
      
          const animation4 = gsap.fromTo(
            el4,
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.inOut",
            }
          );

          const animation5 = gsap.fromTo(
            el5,
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.inOut",
            }
          );
          ScrollTrigger.create({
            trigger: el1,
            animation: animation1,
          });
      
          ScrollTrigger.create({
            trigger: el2,
            animation: animation2,
          });
      
          ScrollTrigger.create({
            trigger: el3,
            animation: animation3,
          });
          ScrollTrigger.create({
            trigger: el4,
            animation: animation4,
          });
          ScrollTrigger.create({
            trigger: el5,
            animation: animation5,
          });
    },[]);
    return (
        <>
        <NavBar courses='course-opt' bihm='bihm-opt'/>
            {/* Photo and Heading */}
            <div className="BIHM_Container" ref={imageRef}>
                <div className="BIHM_Photo">
                    <img alt="" src={require("../../../assets/BIHM/about-banner2.png")}  className="image" />
                </div>
            </div>
            <div className="BIHM_Heading">
                <p>BA (Hons) INTERNATIONAL HOSPITALITY MANAGEMENT</p>
            </div>


            <div className="about_BIHM" ref={anotherRef}>
                <div className="contains_BIHM">
                    <div className="about_Image">
                        <img alt="" src={require("../../../assets/BIHM/Requirement.png")}  className="Nailshika_Image" />
                        <div className="frame">
                            <div className="red_BIHM"></div>
                            <div className="blue_BIHM"></div>
                        </div>
                    </div>
                    <div className="text-content">
                        <h1>BIHM</h1>
                        <p>Bachelors in International Business Management is an interdisciplinary approach to global citizenship that will equip you with the knowledge and expertise to manage across the global framework. This course will train you in key areas of business by helping you develop your own understanding of complex notions in the international business environment, with digital literacy skills via the use of software employed by contemporary organizations.</p>
                    </div>
                </div>
            </div>


            <div className="BIHM_Module" ref={anotherRef2}>
                <h1> Module & Contents </h1>
                <p>Acquire a thorough comprehension of programming languages, information systems,
                    software and hardware technologies, and various other related topics.</p>
            </div>
            <Module/>
            <br /><br />
            <Group/>
            <Footer/>
        </>
    );
};

export default BIHM;