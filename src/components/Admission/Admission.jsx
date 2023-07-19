import React from "react";
import "./Admission.scss";
import NavBar from "../NavBar/NavBar";
import SlideShow from './Slideshow/Slideshow'
import Footer from "../Footer/Footer";
const Admission = () => {
    return (

        <>
        <NavBar admission='admission-opt'/>
        <SlideShow/>
            <div className="admission">
                <div className="entry-requirement">
                    <p>Entry Requirements</p>
                </div>
                <div className="academic-level">
                    <div className="content-wrapper">
                        <h1>Academic Level</h1>
                        <ul>
                            <li>NEB +2 requires an overall aggregate of 2.2 CGPA (55%) or above.</li>
                            <li>Each subject (theory and practical) must have a grade of D or above.</li>
                            <li>A minimum score of C (50%) or above is required in the SEE Mathematics exam.</li>
                        </ul>
                    </div>
                    <img alt="" src={require('../../assets/Admission/spring.png')} />
                </div>

                <div className="academic-level">
                    <div className="content-wrapper">
                        <h1>Academic Proficiency</h1>
                        <ul>
                            <li>English NEB XII Marks grade C+ or above or 2.4 GPA.</li>
                            <li>For Level 4 or Year 1 BBA</li>
                            <li>Pass in General Paper or English Language or IELTS 6 or PTE 53.</li>
                        </ul>
                    </div>
                    <img alt="" src={require('../../assets/Admission/spring.png')}/>
                </div>

                <div className="academic-level">
                    <div className="content-wrapper">
                        <h1>Note</h1>
                        <p>
                            Applicants not meeting the aforementioned criteria for English can demonstrate their English proficiency with the following internationally recognized English Tests.
                        </p>
                    </div>
                    <img alt="" src={require('../../assets/Admission/spring.png')}/>
                </div>

                <img alt="" src={require('../../assets/Admission/career.png')} className="bgImg"/>
            </div>

            <div className="image-section">
                <div className="image-wrapper">
                    <img alt="" src={require("../../assets/Admission/Group 152.jpg")} />
                    <div className="image-overlay">
                        <h1 className="image-text">What's Your Next Step?</h1>
                        <button className="apply-buttons">Apply Now</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>

    );
};

export default Admission;
