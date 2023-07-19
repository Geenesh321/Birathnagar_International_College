import React, { useState, useEffect } from "react";
import './Testimonial.scss';
import Story1 from '../../../assets/Landing/Story1.jpg';

const Testimonial = () => {
    const [slide, setSlide] = useState(0);

    const [is1, setIs1] = useState(true);
    const [is2, setIs2] = useState(false);
    const [is3, setIs3] = useState(false);
    const [is4, setIs4] = useState(false);

    const changeSlide = () => {
        if(is1){
            setSlide(0)
        }
        else if(is2){
            setSlide(-100)
        }
        else if(is3){
            setSlide(-200)
        }
        else if(is4){
            setSlide(-300)
        }
    }
    useEffect(()=>{
        changeSlide()
        // setInterval(() => {
        //     nextSlide()
        // }, 5000);
    })

    return(
        <section className="testimonial-section">
            <div className="testimonial-heading">
                <p>Life At BIC</p>
                <h2>Past Events</h2>
                <div className="u-line">
                    <span className="box"></span>
                    <span className="line"></span>
                    <span className="box"></span>
                </div>
            </div>

            <div className="testimonial-container">
                <div className="slider">
                    <div className="slides">
                        <div className="slide slide1" style={{'margin-left':`${slide}%`}}>
                            <div className="image">
                                <img src={Story1} alt="" />
                            </div>
                            <div className="content">
                                <h4>Student Name</h4>
                                <p>Recipient of 15 day Summer School, 2017 - A15 Batch</p>
                                <p className="story">“The Summer School at the University of Wolverhampton has been a great time of learning and experience for me. I was extremely satisfied with the facilities and especially liked the trips that were arranged for us to London, Stratford-upon-Avon, Warwick Castle and many more. I met many people from different countries and this has helped me during classes which were a mixture of English, cultural learning and animation. The Summer School was one of the most exciting days of my life.”</p>
                            </div>
                        </div>

                        <div className="slide slide1">
                            <div className="image">
                                <img src={Story1} alt="" />
                            </div>
                            <div className="content">
                                <h4>Student Name</h4>
                                <p>Recipient of 15 day Summer School, 2017 - A15 Batch</p>
                                <p className="story">“The Summer School at the University of Wolverhampton has been a great time of learning and experience for me. I was extremely satisfied with the facilities and especially liked the trips that were arranged for us to London, Stratford-upon-Avon, Warwick Castle and many more. I met many people from different countries and this has helped me during classes which were a mixture of English, cultural learning and animation. The Summer School was one of the most exciting days of my life.”</p>
                            </div>
                        </div>

                        <div className="slide slide1">
                            <div className="image">
                                <img src={Story1} alt="" />
                            </div>
                            <div className="content">
                                <h4>Student Name</h4>
                                <p>Recipient of 15 day Summer School, 2017 - A15 Batch</p>
                                <p className="story">“The Summer School at the University of Wolverhampton has been a great time of learning and experience for me. I was extremely satisfied with the facilities and especially liked the trips that were arranged for us to London, Stratford-upon-Avon, Warwick Castle and many more. I met many people from different countries and this has helped me during classes which were a mixture of English, cultural learning and animation. The Summer School was one of the most exciting days of my life.”</p>
                            </div>
                        </div>

                        <div className="slide slide1">
                            <div className="image">
                                <img src={Story1} alt="" />
                            </div>
                            <div className="content">
                                <h4>Student Name</h4>
                                <p>Recipient of 15 day Summer School, 2017 - A15 Batch</p>
                                <p className="story">“The Summer School at the University of Wolverhampton has been a great time of learning and experience for me. I was extremely satisfied with the facilities and especially liked the trips that were arranged for us to London, Stratford-upon-Avon, Warwick Castle and many more. I met many people from different countries and this has helped me during classes which were a mixture of English, cultural learning and animation. The Summer School was one of the most exciting days of my life.”</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="index">
                        <input type="radio" className="radio radio1" id="radio1" name="testimonial" onClick={()=>{
                                setIs1(true)
                                setIs2(false)
                                setIs3(false)
                                setIs4(false)
                                changeSlide()
                            }
                        }/>
                        <input type="radio" className="radio radio2" id="radio2" name="testimonial" onClick={()=>{
                                setIs1(false)
                                setIs2(true)
                                setIs3(false)
                                setIs4(false)
                                changeSlide()
                            }
                        }/>
                        <input type="radio" className="radio radio3" id="radio3" name="testimonial" onClick={()=>{
                                setIs1(false)
                                setIs2(false)
                                setIs3(true)
                                setIs4(false)
                                changeSlide()
                            }
                        }/>
                        <input type="radio" className="radio radio4" id="radio4" name="testimonial" onClick={()=>{
                                setIs1(false)
                                setIs2(false)
                                setIs3(false)
                                setIs4(true)
                                changeSlide()
                            }
                        }/>

                        <label htmlFor="radio1" className={`${is1?'active':''}`}></label>
                        <label htmlFor="radio2" className={`${is2?'active':''}`}></label>
                        <label htmlFor="radio3" className={`${is3?'active':''}`}></label>
                        <label htmlFor="radio4" className={`${is4?'active':''}`}></label>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Testimonial;