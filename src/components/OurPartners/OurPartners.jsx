import React from "react";
import NavBar from "../NavBar/NavBar";
import './Partners.css';
import image1 from '../../assets/Images/wolver.jpg'
import image2 from '../../assets/Images/pppp.png'
import image3 from '../../assets/Images/Group.png'
import image4 from '../../assets/Images/ing1.png'
import image5 from '../../assets/Images/oo.png'
import image6 from '../../assets/Images/corporate-partnerships.jpeg'
import image7 from '../../assets/Images/black-logo1-removebg-preview.png'
import image8 from '../../assets/Images/Sanima-Bank.png'
import image9 from '../../assets/Images/cim.webp'
import Footer from "../Footer/Footer";
const Partners = () => {
  return (
    <>
      <NavBar partners='partners-opt'/>

      <div className="SectionA" >

        <div className="Header">
          <div className="about-heading1"></div>.
          <h1 className="Heading1">Our Partners</h1>
          <div className="u-line1">
            <span className="box1"></span>
            <span className="line1"></span>
            <span className="box1"></span>
          </div>
        </div>

        <div className="Container1">
          <img className="Wolver1" src={image1} alt="" />
          <div className="Block1" ></div>
          <div className="Block2" ></div>

          <div className="partner-content">
            <img src={image2} alt="" />

            <h1>Our University</h1>
            <p>
              ING is an investment holding company that focuses on innovating
              higher education in Nepal by blending international qualifications
              with the local context. Due to the pioneering work that we have
              done in the country, the Nepalese Ministry of Education in 2014
              awarded our Founder/ Group Chairman, Mr. Sulav Budhathoki, with
              a Letter of Commendation for advancing the betterment of higher
              education in Nepal.
            </p>
          </div>
        </div>
      </div>


      <div className="SectionB" >

        <div className="Container2">
          <img className="Wolver2" src={image4} alt="" />
          <div className="Block3" ></div>
          <div className="Block4" ></div>

          <div className="partner-content2">
            <img src={image3} alt="" />

            <h1>Innovate Nepal</h1>
            <p>
              The University of Wolverhampton is a prestigious institution that
              has been committed to offering opportunities and academic excellence
              for nearly 190 years. Their motto, "Innovation and Opportunity,"
              reflects their ongoing dedication to providing students with the best
              possible options as they progress from being students to graduates and
              professionals.working professional.
            </p>
          </div>
        </div>
      </div>


      {/* Section 3 */}
      <div className="SectionC" >

        <div className="Container3">
          <img className="Wolver3" src={image6} alt="" />
          <div className="Block5" ></div>
          <div className="Block6" ></div>

          <div className="partner-content3">
            <div className="corporate-top">
              <img src={image5} alt="" className="hand-shake" />
              <h1>Corporate Partners</h1>
            </div>
            <div className="partner-info">
              <div className="C1">
                <h4>Sanima Bank</h4>
                <div className="image">
                  <img src={image8}  alt=""/>
                </div>
              </div>

              <div className="C2">
                <h4>Nepalirika Hotel</h4>
                <div className="image">
                  <img src={image7}  alt=""/>
                </div>
              </div>

              <div className="C3">
                <h4>Chamber of Industries Morang</h4>
                <div className="image">
                  <img src={image9}  alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    <Footer/>


    </>
  )
}

export default Partners;
