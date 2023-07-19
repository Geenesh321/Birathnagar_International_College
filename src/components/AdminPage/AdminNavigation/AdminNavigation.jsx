import React from "react";
import './AdminNavigation.scss';
import { BiEditAlt } from 'react-icons/bi'
import { useNavigate } from "react-router-dom";
const AdminNavigation = () => {
    const navigate = useNavigate();
    return(
        <nav className="admin-navigation">
            <h1 className="admin-page-heading">Admin Page</h1>
            <div className="blogs">
                <h1>Blogs</h1>
                <div onClick={()=>navigate('/admin-blogs')}><p>Posts</p><span><BiEditAlt/>Edit</span></div>
            </div>

            <div className="blogs">
                <h1>Enquiry</h1>
                <div onClick={()=>navigate('/contacts')}><p>Contacts</p><span><BiEditAlt/>Edit</span></div>
                <div onClick={()=>navigate('/registrations')}><p>Registrations</p><span><BiEditAlt/>Edit</span></div>
            </div>
        </nav>
    )
}

export default AdminNavigation;