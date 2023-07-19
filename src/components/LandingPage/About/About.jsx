import React from "react";
import './About.scss';
import { FaGraduationCap } from 'react-icons/fa'
import { FaBook, FaUserFriends, FaCertificate } from 'react-icons/fa'
const About = () => {
    return (
        <section className="why">
            <div className="about-heading">
                <p>Why BIC?</p>
                <h2>What You Will Achieve</h2>
                <div className="u-line">
                    <span className="box"></span>
                    <span className="line"></span>
                    <span className="box"></span>
                </div>
            </div>

            <div className="about-container">
                <div className="image">
                    <div className="img"></div>
                    <div className="shadow"></div>
                </div>

                <div className="contents">
                    <div className="card card1">
                        <span className="svg">
                            <FaGraduationCap/>
                        </span>
                        <h4>Academic Prestige</h4>
                        <p>Teaching facilities and infrastructure meet the international standards set by the university partner.</p>
                    </div>

                    <div className="card card1">
                        <span className="svg">
                            <FaBook/>
                        </span>
                        <h4>Recognition</h4>
                        <p>We are direct partners of a prestigious UK University, with international faculties and guest lecturers.</p>
                    </div>

                    <div className="card card1">
                        <span className="svg">
                            <FaUserFriends/>
                        </span>
                        <h4>Academic Prestige</h4>
                        <p>All teaching faculties are approved by the relevant awarding bodies – University of Wolverhampton.</p>
                    </div>

                    <div className="card card1">
                        <span className="svg">
                            <FaCertificate/>
                        </span>
                        <h4>Academic Prestige</h4>
                        <p>Upon successful completion of the course, the student shall receive Bachelor degree certificate from the University of Wolverhampton, UK.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;