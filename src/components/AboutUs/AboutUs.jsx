import React from "react";
import NavBar from "../NavBar/NavBar";

import MainContainer from "../AboutUs/MainContainer/MainContainer";
import Footer from "../Footer/Footer";

const Landing = () => {
  return(
    <>
        <NavBar pos='sticky' about='about-opt'/>
        <br /><br /><br /><br />
        <MainContainer/>
        <Footer/>

    </>
  )
}

export default Landing;