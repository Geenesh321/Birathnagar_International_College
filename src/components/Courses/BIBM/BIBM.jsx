import React, { useState } from 'react';
import "./BIBM.scss";
import NavBar from '../../NavBar/NavBar';
import Group from '../Group/Group';
import { useRef } from "react";
import Footer from '../../Footer/Footer';

const BIBM = () => {

    const imageRef = useRef(null);
    const [activeYear, setActiveYear] = useState('Year 1');

    const handleButtonClick = (year) => {
        setActiveYear(year);
    };
    return (
        <>
        <NavBar courses='course-opt' bibm='bibm-opt'/>
            <div className="BIBM_Container" ref={imageRef}>
                <div className="BIBM_Photo">
                    <img alt="" src={require("../../../assets/BIBM/home-banner.png")}  className="image" />
                </div>
            </div>
            <div className="BIBM_Heading">
                <p>BA (Hons) INTERNATIONAL HOSPITALITY MANAGEMENT</p>
            </div>

            <div className="about_BIBM" >
                <div className="contains_BIBM">
                    <div className="about_Images">
                        <img alt="" src={require("../../../assets/BIBM/Digital Business Management Intro.png")}  className="BIBM_Image" />
                        <div className="frames">
                            <div className="Blue_BIBM"></div>
                            <div className="Green_BIBM"></div>
                        </div>
                    </div>
                    <div className="text-contents">
                        <h1>BIBM</h1>
                        <p>Bachelors in International Business Management is an interdisciplinary approach to global citizenship that will equip you with the knowledge and expertise to manage across the global framework. This course will train you in key areas of business by helping you develop your own understanding of complex notions in the international business environment, with digital literacy skills via the use of software employed by contemporary organizations. </p>
                    </div>
                </div>
            </div>

            <div className="BIBM_Module" >
                <h1> Module & Contents </h1>
                <p>Acquire a thorough comprehension of programming languages, information systems,
                    software and hardware technologies, and various other related topics.</p>
            </div>


            <div className="module_Slider" >
                <button
                    className={`sliderButton ${activeYear === 'Year 1' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('Year 1')}
                >
                    Year 1
                </button>
                <button
                    className={`sliderButton ${activeYear === 'Year 2' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('Year 2')}
                >
                    Year 2
                </button>
                <button
                    className={`sliderButton ${activeYear === 'Year 3' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('Year 3')}
                >
                    Year 3
                </button>
                <button
                    className={`sliderButton ${activeYear === 'Year 4' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('Year 4')}
                >
                    Year 4
                </button>
            </div>


            <div className="bibm-content" >
                {activeYear === 'Year 1' &&
                    <>
                        <div className="DIV">
                            <div className="Contents_DIVISION1">
                                <p className="databaseText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5051NT</p>
                                    <p className="credits">Credits: 15</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Contents_DIVISION2">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5052NT</p>
                                    <p className="credits">Credits: 12</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Contents_DIVISION3">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5053NT</p>
                                    <p className="credits">Credits: 18</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Contents_DIVISION4">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5054NT</p>
                                    <p className="credits">Credits: 10</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Contents_DIVISION5">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5055NT</p>
                                    <p className="credits">Credits: 16</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>
                        </div>

                        <div className="div_Content_Images">
                            <img alt="" src={`${require('../../../assets/BIHM/Sa.webp')}`}  />
                        </div>
                    </>
                }

                {activeYear === 'Year 2' &&
                    <>
                        <div className="DIV">
                            <div className="Contents_DIVISION1">
                                <p className="databaseText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5051NT</p>
                                    <p className="credits">Credits: 15</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Contents_DIVISION2">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5052NT</p>
                                    <p className="credits">Credits: 12</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Contents_DIVISION3">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5053NT</p>
                                    <p className="credits">Credits: 18</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Contents_DIVISION4">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5054NT</p>
                                    <p className="credits">Credits: 10</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Contents_DIVISION5">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5055NT</p>
                                    <p className="credits">Credits: 16</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>
                        </div>

                        <div className="div_Content_Images">
                            <img alt="" src={`${require('../../../assets/BIHM/Sa.webp')}`}  />
                        </div>

                    </>
                }

                {activeYear === 'Year 3' &&

                    <>
                        <div className="DIV">
                            <div className="Contents_DIVISION1">
                                <p className="databaseText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5051NT</p>
                                    <p className="credits">Credits: 15</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Contents_DIVISION2">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5052NT</p>
                                    <p className="credits">Credits: 12</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Contents_DIVISION3">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5053NT</p>
                                    <p className="credits">Credits: 18</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Contents_DIVISION4">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5054NT</p>
                                    <p className="credits">Credits: 10</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Contents_DIVISION5">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5055NT</p>
                                    <p className="credits">Credits: 16</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>
                        </div>

                        <div className="div_Content_Images">
                            <img alt="" src={`${require('../../../assets/BIHM/Sa.webp')}`}  />
                        </div>
                    </>
                }

                {activeYear === 'Year 4' &&
                    <>
                        <div className="DIV">
                            <div className="Contents_DIVISION1">
                                <p className="databaseText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5051NT</p>
                                    <p className="credits">Credits: 15</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Contents_DIVISION2">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5052NT</p>
                                    <p className="credits">Credits: 12</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Contents_DIVISION3">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5053NT</p>
                                    <p className="credits">Credits: 18</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Contents_DIVISION4">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5054NT</p>
                                    <p className="credits">Credits: 10</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Contents_DIVISION5">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5055NT</p>
                                    <p className="credits">Credits: 16</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>
                        </div>

                        <div className="div_Content_Images">
                            <img alt="" src={`${require('../../../assets/BIHM/Requirement.png')}`}  />
                        </div>
                    </>
                }
            </div>
            <br />
            <br />

            <Group/>
            <Footer/>
        </> 
    );
};

export default BIBM;