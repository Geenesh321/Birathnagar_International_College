import React from "react";
import './Events.scss';
import Event1 from '../../../assets/Landing/event1.jpg'
import Event2 from '../../../assets/Landing/event2.jpg'
import Event3 from '../../../assets/Landing/event3.jpg'
import Event4 from '../../../assets/Landing/EVENT4.jpg'
import Event5 from '../../../assets/Landing/event5.jpg'
import Event6 from '../../../assets/Landing/event6.jpg'
import Event7 from '../../../assets/Landing/event7.jpg'
import Event8 from '../../../assets/Landing/event8.jpg'
import Event9 from '../../../assets/Landing/event9.jpg'
import Event10 from '../../../assets/Landing/event10.jpg'
const Events = () => {
    return (
        <section className="events-section">
            <div className="events-heading">
                <p>Life At BIC</p>
                <h2>Past Events</h2>
                <div className="u-line">
                    <span className="box"></span>
                    <span className="line"></span>
                    <span className="box"></span>
                </div>
            </div>

            <div className="events-container">
                <div className="images">
                    <div className="image image1">
                        <img src={Event1} alt="" />
                        <div className="info">
                            <p>Christmas</p>
                        </div>
                    </div>
                    <div className="image image2">
                        <img src={Event2} alt="" />
                        <div className="info">
                            <p>Christmas</p>
                        </div>
                    </div>
                    <div className="image image3">
                        <img src={Event3} alt="" />
                        <div className="info">
                            <p>Holi</p>
                        </div>
                    </div>
                    <div className="image image4">
                        <img src={Event4} alt="" />
                        <div className="info">
                            <p>Dashain</p>
                        </div>
                    </div>
                    <div className="image image5">
                        <img src={Event5} alt="" />
                        <div className="info">
                            <p>Holi</p>
                        </div>
                    </div>
                    <div className="image image6">
                        <img src={Event6} alt="" />
                        <div className="info">
                            <p>Dashain</p>
                        </div>
                    </div>
                    <div className="image image7">
                        <img src={Event7} alt="" />
                        <div className="info">
                            <p>Dashain</p>
                        </div>
                    </div>
                    <div className="image image8">
                        <img src={Event8} alt="" />
                        <div className="info">
                            <p>Dashain</p>
                        </div>
                    </div>
                    <div className="image image9">
                        <img src={Event9} alt="" />
                        <div className="info">
                            <p>Dashain</p>
                        </div>
                    </div>
                    <div className="image image10">
                        <img src={Event10} alt="" />
                        <div className="info">
                            <p>Holi</p>
                        </div>
                    </div>
                    <div className="text">
                        <p>Each year, Christmas festival is celebrated with the spirit of ending the academic year on a high note. This event entirely is designated to fun activities,<br /> where students co-ordinate among themselves to make this event one of the best experiences of their college life.</p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Events;