import React, { useState } from 'react';
import "./module.scss";

const Module = () => {
    const [activeYear, setActiveYear] = useState('Year 1');

    const handleButtonClick = (year) => {
        setActiveYear(year);
    };

    return (
        <>
            <div className="module_Slider">
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
            </div>
            <div className="content">
                {activeYear === 'Year 1' &&
                    <>
                        <div className="DIV">
                            <div className="Content_DIVISION1">
                                <p className="databaseText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5051NT</p>
                                    <p className="credits">Credits: 15</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Content_DIVISION2">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5052NT</p>
                                    <p className="credits">Credits: 12</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Content_DIVISION3">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5053NT</p>
                                    <p className="credits">Credits: 18</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Content_DIVISION4">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5054NT</p>
                                    <p className="credits">Credits: 10</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Content_DIVISION5">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5055NT</p>
                                    <p className="credits">Credits: 16</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="div_Content_Image">
                            <img alt="" src={`${require('../../../../assets/BIHM/Sa.webp')}`}  />
                        </div>
                    </>
                }
                {activeYear === 'Year 2' &&
                
                <>
                        <div className="DIV">
                            <div className="Content_DIVISION1">
                                <p className="databaseText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5051NT</p>
                                    <p className="credits">Credits: 15</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Content_DIVISION2">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5052NT</p>
                                    <p className="credits">Credits: 12</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Content_DIVISION3">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5053NT</p>
                                    <p className="credits">Credits: 18</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Content_DIVISION4">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5054NT</p>
                                    <p className="credits">Credits: 10</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Content_DIVISION5">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5055NT</p>
                                    <p className="credits">Credits: 16</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="div_Content_Image">
                            <img alt="" src={`${require('../../../../assets/BIHM/Sa.webp')}`}  />
                        </div>
                        
                    </>
                
                
                
                
                
                }


                
                {activeYear === 'Year 3' && 
                
                <>
                        <div className="DIV">
                            <div className="Content_DIVISION1">
                                <p className="databaseText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5051NT</p>
                                    <p className="credits">Credits: 15</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Content_DIVISION2">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5052NT</p>
                                    <p className="credits">Credits: 12</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Content_DIVISION3">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5053NT</p>
                                    <p className="credits">Credits: 18</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Content_DIVISION4">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5054NT</p>
                                    <p className="credits">Credits: 10</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Content_DIVISION5">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5055NT</p>
                                    <p className="credits">Credits: 16</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="div_Content_Image">
                            <img alt="" src={`${require('../../../../assets/BIHM/Sa.webp')}`}  />
                        </div>
                    </>      
                }
            </div>

        </>

    );
};

export default Module;

