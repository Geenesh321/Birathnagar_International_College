import React, { useState, useEffect } from "react";
import AdminNavigation from "../AdminNavigation/AdminNavigation";
import './Registrations.scss';
import { FcEmptyFilter } from 'react-icons/fc'


import { RiDeleteBinLine } from 'react-icons/ri'
import Axios from 'axios';
import ip from "../../../ip-config/ip";

const Registrations = () => {
    const win = sessionStorage;
    const [msg, setMsg] = useState(null)


    const [registrations, setRegistrations] = useState([])
    useEffect(() => {
        const fetchRegistrations = async () => {
            await Axios.get(`https://${ip}/api/admin/enquiry`, {
                headers: {
                    Authorization: `Bearer ${win.getItem('token')}`
                },
            }).then((response) => {
                if (response.data.success === 1) {
                    setRegistrations(response.data.data);
                    setMsg(null)
                }
                else if (response.data.success === 0) {
                    setMsg(response.data.message);
                }
            });
        }
        fetchRegistrations();
    });

    const deleteRegistration = (delId) => {
        // eslint-disable-next-line no-restricted-globals
        const shouldDelete = confirm('Do You Want to Delete This Registration Details?');

        if(shouldDelete){
            Axios.delete(`https://${ip}/api/admin/enquiry`, {
                headers: {
                    Authorization: `Bearer ${win.getItem('token')}`
                },
                data: {
                    enquire_id: delId
                }
            }).then((response) => {
                if(response.data.success === 1){
                    window.location.href = '/registrations'
                    // navigate('/admin-blogs')
                }
            })
        }
    }

    const clearAll = () => {
        // eslint-disable-next-line no-restricted-globals
        const shouldClear = confirm('Do You Want to Clear All Registration Details?');

        if(shouldClear){
            Axios.delete(`https://${ip}/api/admin/cleare`, {
                headers: {
                    Authorization: `Bearer ${win.getItem('token')}`
                },
            }).then((response) => {
                console.log(response.data)
                if(response.data.success === 0){
                    window.location.href = '/registrations'
                }
            })
        }
    }
    return msg===null?
    (
        (
            <>
                <AdminNavigation />
                <div className="contacts-table">
                    <div className="clear-button" onClick={() => clearAll()}><RiDeleteBinLine /><p>Clear All</p></div>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone Number</th>
                                <th>Email Address</th>
                                <th>Sector</th>
                                <th>Referal</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {registrations
                                ?
                                registrations.map((registration) => {
                                    return (
                                        // <div className="blog mainBlog">
                                        //     <div className="img">
                                        //         <img src={`https://192.168.206.193/blog/${blog.blog_image}`} alt=""/>
                                        //     </div>
                                        //     <h4>{blog.title} - {blog.writer_name}hahahah</h4>
                                        // </div>
                                        <tr>
                                            <td>{registration.name}</td>
                                            <td>{registration.phone}</td>
                                            <td>{registration.email}</td>
                                            <td>{registration.sector}</td>
                                            <td>{registration.referral}</td>
                                            <td><RiDeleteBinLine className="delete" onClick={() => deleteRegistration(registration.enquire_id)} /></td>
                                        </tr>
                                    )
                                })
    
                                : ''
                            }
                        </tbody>
                    </table>
                </div>
            </>
        )
    )
    :
    (
        <>
                <AdminNavigation />
                <div className="contacts-table">
                    <div className="clear-button" onClick={() => clearAll()}><RiDeleteBinLine /><p>Clear All</p></div>
                    <div className="empty">
                        <FcEmptyFilter />
                        {msg}
                    </div>
                </div>
            </>
    )
}

export default Registrations;