import React from "react";
import './Visit.scss';
import Library from '../../../assets/Landing/library.jpg';
import Canteen from '../../../assets/Landing/canteen.jpg';
import Lab from '../../../assets/Landing/lab.jpg';
import BasketBall from '../../../assets/Landing/basketball.jpg';
import Lecture from '../../../assets/Landing/lecturehall.jpg';

const Visit = () => {
    return(
        <section className="visit-section">
            <div className="visit-heading">
                <p>Visit Us</p>
                <h2>Our Infrastructures</h2>
                <div className="u-line">
                    <span className="box"></span>
                    <span className="line"></span>
                    <span className="box"></span>
                </div>
            </div>

            <div className="visit-container">
                <div className="design1"></div>
                <div className="images">
                    <div className="image image1">
                        <img src={Library} alt="" />
                        <div className="info">
                            <p>Library</p>
                        </div>
                    </div>
                    <div className="image image2">
                        <img src={Canteen} alt="" />
                        <div className="info">
                            <p>Canteen</p>
                        </div>
                    </div>
                    <div className="image image3">
                        <img src={Lecture} alt="" />
                        <div className="info">
                            <p>Lecture Hall</p>
                        </div>
                    </div>
                    <div className="image image4">
                        <img src={BasketBall} alt="" />
                        <div className="info">
                            <p>Basketball</p>
                        </div>
                    </div>
                    <div className="image image5">
                        <img src={Lab} alt="" />
                        <div className="info">
                            <p>Computer Lab</p>
                        </div>
                    </div>
                    
                    <div className="design2"></div>
                    <div className="text">
                        <p>Our premises are equipped with the latest technology and infrastructure to enrich our students’ experience even further.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Visit;