import React, { useState } from "react";
import './Contact.scss';
import NavBar from "../NavBar/NavBar";
import Axios from "axios";
import ip from "../../ip-config/ip";
import Footer from "../Footer/Footer";

const Contact = () => {
    const [loading, setLoading] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const contactNow = (e)=>{
        e.preventDefault();
        setLoading(true);
        console.log(name, email, message)
        Axios.post(`https://${ip}/api/contact`,{
            name: name,
            email: email,
            message: message
        }).then((response) =>{
            // setTimeout(()=>{
                setLoading(false)
                alert('Submitted..')
            // }, 1000)
        })
    }
    return (
        <>
            <NavBar enquire='enquire-opt' contact='contact-opt'/>
            <section className="contact-page">
                <div className="contact-container">
                    <form action="" onSubmit={(e)=>contactNow(e)}>
                        <h2>Contact Us</h2>
                        <input type="text" placeholder="Full Name" onChange={(e)=>setName(e.target.value)} required/>
                        <input type="email" placeholder="Your Email" onChange={(e)=>setEmail(e.target.value)} required/>
                        <textarea name="message" placeholder="Message" onChange={(e)=>setMessage(e.target.value)} required></textarea>
                        {loading?<button className="loading">Submitting...</button>:<button type="submit">Submit</button>}
                    </form>
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2127.511073304417!2d87.30179519290544!3d26.655303632085797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6ea070e7b18b%3A0x2959e2a3e2bf54e0!2sItahari+Int&#39;l+College!5e0!3m2!1sen!2snp!4v1528259945147" title="map" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Contact;