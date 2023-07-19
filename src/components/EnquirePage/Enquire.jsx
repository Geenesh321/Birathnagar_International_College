import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import './Enquire.scss';
import { IoMdMail } from 'react-icons/io';
import { FaUserGraduate } from 'react-icons/fa';
import { BiLinkAlt } from 'react-icons/bi';
import EnquireImg from '../../assets/Enquire/enquire.png'

import Axios from "axios";
import ip from "../../ip-config/ip";
import Footer from "../Footer/Footer";

const Enquire = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [sector, setSector] = useState('');
    const [referal, setReferal] = useState('');
    // const [name, setName] = useState('');

    const [loading, setLoading] = useState(false)

    const enquireNow = (e)=>{
        setLoading(true)
        e.preventDefault();
        let name = firstName.trim() + ' ' + lastName.trim()
        console.log(name)
        Axios.post(`https://${ip}/api/enquiry`,{
            name: name,
            phone: phone,
            email: email,
            sector: sector,
            referral: referal
        }).then((response) =>{
            setLoading(false)
            if(response.data.success === 1){
                alert('Details Submitted.')
            }
        })
    }
    // const enquireNow2 = (e) => {
    //     e.preventDefault();
    //     console.log('Name: ', firstName, ' ', lastName)
    //     console.log('Phone: ', phone);
    //     console.log('Email: ', email)
    //     console.log('Sector: ', sector)
    //     console.log('Referal: ', referal)
    // }

    return (
        <>
            <NavBar pos='sticky' enquire='enquire-opt' register='register-opt'/>
            <section className="enquire">
                <div className="image">
                    <img src={EnquireImg} alt="" />
                </div>

                <div className="enquire-container">
                    <h2>Ready to Join Tell us More..</h2>
                    <form action="" onSubmit={(e)=>enquireNow(e)}>
                        <label htmlFor="first-name">Name<span>*</span></label>
                        <div className="name">
                            <input type="text" placeholder="First" id="first-name" onChange={(e)=>setFirstName(e.target.value)} required minLength='3'/>
                            <input type="text" placeholder="Last"  onChange={(e)=>setLastName(e.target.value)} required minLength='3'/>
                        </div>

                        <label htmlFor="phone">Phone Number<span>*</span></label>
                        <div className="phone">
                            <p>+977</p>
                            <input type="text" id="phone"  onChange={(e)=>setPhone(e.target.value)} required pattern="[1-9]{1}[0-9]{9}"/>
                        </div>

                        <label htmlFor="email">Email Address<span>*</span></label>
                        <div className="email">
                            <p><IoMdMail/></p>
                            <input type="email" id="email"  onChange={(e)=>setEmail(e.target.value)} required minLength='10'/>
                        </div>

                        <label htmlFor="sector">Sector<span>*</span></label>
                        <div className="sector">
                            <p><FaUserGraduate/></p>
                            <input type="text" id="sector"  onChange={(e)=>setSector(e.target.value)} required minLength='3'/>
                        </div>

                        <label htmlFor="referal">Referal<span>*</span></label>
                        <div className="referal">
                            <p><BiLinkAlt/></p>
                            <input type="text" id="referal"  onChange={(e)=>setReferal(e.target.value)} required minLength='3'/>
                        </div>

                        <br />
                        {loading?<button>Submitting...</button>:<input type="submit" value='Submit'/>}
                    </form>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Enquire;