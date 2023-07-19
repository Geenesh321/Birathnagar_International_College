import React from "react";
import './Courses.scss';
import BIBM from '../../../assets/Landing/BIBM.jpg'
import BIHM from '../../../assets/Landing/BIHM.png'
import { useNavigate } from "react-router-dom";
const Courses = () => {
    const navigate = useNavigate()
    return (
        <section className="courses">
            <div className="courses-heading">
                <p>Our Courses</p>
                <h2>Programmes</h2>
                <div className="u-line">
                    <span className="box"></span>
                    <span className="line"></span>
                    <span className="box"></span>
                </div>
            </div>

            <div className="course-container">
                <div className="card card1">
                    <div className="design"></div>
                    <div className="content">
                        <img src={BIBM} alt="" />
                        <button onClick={()=>navigate('/bibm')}>Read More</button>
                    </div>
                </div>
                
                <div className="card card2">
                    <div className="content">
                        <img src={BIHM} alt="" />
                        <button onClick={()=>navigate('/bihm')}>Read More</button>
                    </div>
                    <div className="design"></div>
                </div>
            </div>
        </section>
    )
}

export default Courses;