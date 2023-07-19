
import React from "react";

import AboutUs from "../../../assets/AboutImages/aboutusimage.png" 
import '../MainContainer/MainContainer.scss'
import { useNavigate } from "react-router-dom";
const MainContainer = () => {
  const navigate = useNavigate()
  return(
<div className="maincontainer-aboutus">
  <h1>About</h1>
  <h3>Biratnagar <span>International College</span> </h3>
  <div className="content-aboutus">
    <div className="showimage">
    <img className="about-image" src={`${AboutUs}`} alt="" width="500px" />

      <div className="firstborder"></div>
      <div className="secondborder"></div>
    </div>
    <div className="text">
    <h2>Achieve Your Goals With BIC</h2>
    <p>Biratnagar International College is the first UK University College in Eastern Nepal offering globally renowned and internationally recognised Business and Hospitality Degree Programe. We deliver BSc (Hons) in International Business Management and BA (Hons) International Hospitality Management in partnership with the University of Wolverhampton to produce global business leaders.</p>
    <button onClick={()=>navigate('/enquire')}>Enquiry More</button>
    </div>
  </div>
</div>
  )
}

export default MainContainer;