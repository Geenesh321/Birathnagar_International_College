import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from "./components/LandingPage/Landing";
import Enquire from './components/EnquirePage/Enquire';
import AboutUs from "./components/AboutUs/AboutUs";
import OurPartners from "./components/OurPartners/OurPartners";
import Admission from "./components/Admission/Admission";
import LifeAtBic from "./components/LifeAtBic/LifeStyle";
import BlogPage from "./components/BlogPage/BlogPage";
import BIBM from "./components/Courses/BIBM/BIBM";
import BIHM from "./components/Courses/BIHM/BIHM";
import Programs from './components/Courses/Programes/Programmes'
import AdminLogin from './components/AdminPage/AdminLogin/AdminLogin'

import AddBlog from './components/AdminPage/AddBlog/AddBlog';


import SingleBlog from "./components/BlogPage/SingleBlogPage/SingleBlog";
import Contact from "./components/Contact/Contact";
import AdminPage from "./components/AdminPage/AdminPage";
import Blogs from "./components/AdminPage/Blogs/Blogs";
import Contacts from "./components/AdminPage/Contacts/Contacts";
import Registrations from "./components/AdminPage/Registrations/Registrations";
import Intro from "./components/Intro/Intro";

const App = () => {
  const win = sessionStorage;

  const [intro, setIntro] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setIntro(false)
    }, 3000)
  })
  return(
    <>
      {intro?
        <Intro/>
      :
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing/>}></Route>
            <Route path="/about" element={<AboutUs/>}></Route>
            <Route path="/partners" element={<OurPartners/>}></Route>
            <Route path="/admission" element={<Admission/>}></Route>
            <Route path="/life" element={<LifeAtBic/>}></Route>
            <Route path="/blogs" element={<BlogPage/>}></Route>
            <Route path="/blog" element={<SingleBlog/>}></Route>
            <Route path="/enquire" element={<Enquire/>}></Route>
            <Route path="/programs" element={<Programs/>}></Route>
            <Route path="/bibm" element={<BIBM/>}></Route>
            <Route path="/bihm" element={<BIHM/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>

            {/* Admin Pages */}
            <Route path="/admin" element={win.getItem('token')?<AdminPage/>:<AdminLogin/>}></Route>
            {/* <Route path="/admin-page" element={<AdminPage/>:<AdminLogin/>}></Route> */}
            <Route path="/admin-blogs" element={win.getItem('token')?<Blogs/>:<AdminLogin/>}></Route>
            <Route path="/contacts" element={win.getItem('token')?<Contacts/>:<AdminLogin/>}></Route>
            <Route path="/registrations" element={win.getItem('token')?<Registrations/>:<AdminLogin/>}></Route>
            <Route path='/add-blog' element={win.getItem('token')?<AddBlog/>:<AdminLogin/>}></Route>
            <Route path="/admin-page" element={win.getItem('token')?<Blogs/>:<AdminLogin/>}></Route>

          </Routes>
        </BrowserRouter>}
      
    </>
  )
}

export default App;