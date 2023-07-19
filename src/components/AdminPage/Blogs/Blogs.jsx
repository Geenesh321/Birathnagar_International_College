import React, { useState, useEffect } from "react";
import AdminNavigation from "../AdminNavigation/AdminNavigation";
import './Blogs.scss';
import { BiPlusMedical, BiEditAlt } from 'react-icons/bi'
import { RiDeleteBinLine } from 'react-icons/ri'
import { FcEmptyFilter } from 'react-icons/fc'
import { useNavigate } from "react-router-dom";
import Axios from 'axios';
import ip from "../../../ip-config/ip";

import Avatar from '../../../assets/Admin/Profile.png'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { ImCross } from 'react-icons/im'
import Thumbnail from '../../../assets/Admin/thumbnail.png'
import FormData from "form-data"

const Blogs = () => {
    const navigate = useNavigate()
    const win = sessionStorage;
    const [msg, setMsg] = useState(null)
    const [blogs, setBlogs] = useState([]);
    const imagePath = `https://${ip}/blog/`;
    
    useEffect(() => {
        const fetchBlogs = async () => {
            await Axios.get(`https://${ip}/api/post`).then((response) => {
                if (response.data.success === 1) {
                    setBlogs(response.data.data);
                    setMsg(null)
                }
                else if (response.data.success === 0) {
                    setMsg(response.data.message);
                }
                console.log(response.data)
            });
        }
        fetchBlogs();
    }, []);

    const deleteBlog = (delId) => {
        console.log(delId)
        // eslint-disable-next-line no-restricted-globals
        const shouldDelete = confirm('Do You Want to Delete This Post?');

        if (shouldDelete) {
            Axios.delete(`https://${ip}/api/admin/post`, {
                headers: {
                    Authorization: `Bearer ${win.getItem('token')}`
                },
                data: {
                    post_id: delId
                }
            }).then((response) => {
                if (response.data.success === 1) {
                    window.location.href = '/admin-blogs'
                    // navigate('/admin-blogs')
                }
            })
        }
    }


    // For Edit Blog
    const [isActive, setIsActive] = useState(false);
    const [writerImage, setWriterImage] = useState(null)
    const [thumbnailImage, setThumbnailImage] = useState(null)

    const [editId, setEditId] = useState('')
    const [writerImagePath, setWriterImagePath] = useState(null)
    const [writerName, setWriterName] = useState('')
    const [thumbnailImagePath, setThumbnailImagePath] = useState('')
    const [blogHeading, setBlogHeading] = useState('')
    const [blogContent, setBlogContent] = useState('')

    const editBlog = async (event) => {
        event.preventDefault();
        console.log(editId);
        try {
            const formData = new FormData();
            formData.append('post_id', editId)
            formData.append('title', blogHeading);
            formData.append('description', blogContent);
            formData.append('blog_image', thumbnailImagePath);
            formData.append('writer_image', writerImagePath);
            formData.append('writer_name', writerName);

            await Axios.patch(`https://${ip}/api/admin/post`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            }).then((response) => {
                console.log('res',response)
                if (response.data.success === 1) {
                    alert('Blog Updated Successfully.')
                    navigate('/admin-page')
                }
            })

            
            // Handle the response
        } catch (error) {
            console.error('error is ',error);
            // Handle errors
        }
    }

    const clearAll = () => {
        // eslint-disable-next-line no-restricted-globals
        const shouldClear = confirm('Do You Want to Delete All Blogs?');

        if(shouldClear){
            Axios.delete(`https://${ip}/api/admin/postall`, {
                headers: {
                    Authorization: `Bearer ${win.getItem('token')}`
                },
            }).then((response) => {
                console.log(response.data)
                if(response.data.success === 0){
                    window.location.href = '/contacts'
                }
            })
        }
    }
    return msg === null ?
        (
            <>
                <AdminNavigation />
                <div className="blogs-table">
                    <div className="buttons">
                        <div className="add-button" onClick={() => navigate('/add-blog')}><BiPlusMedical /><p>Add Blog</p></div>
                        <div className="clear-button" onClick={() => clearAll()}><RiDeleteBinLine /><p>Clear All</p></div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Blog Title</th>
                                <th>Blog Writer</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs
                                ?
                                blogs.map((blog) => {
                                    return (
                                        // <div className="blog mainBlog">
                                        //     <div className="img">
                                        //         <img src={`https://192.168.206.193/blog/${blog.blog_image}`} alt=""/>
                                        //     </div>
                                        //     <h4>{blog.title} - {blog.writer_name}hahahah</h4>
                                        // </div>
                                        <tr>
                                            <td>{blog.title}</td>
                                            <td>{blog.writer_name}</td>
                                            <td><BiEditAlt className="edit" onClick={()=>{
                                                setEditId(blog.post_id)
                                                setWriterImage(imagePath+blog.writer_image)
                                                setWriterName(blog.writer_name)
                                                setThumbnailImage(imagePath+blog.blog_image)
                                                setBlogHeading(blog.title)
                                                setBlogContent(blog.description)
                                                setIsActive(true)
                                            }}/><RiDeleteBinLine className="delete" onClick={() => deleteBlog(blog.post_id)} /></td>
                                        </tr>
                                    )
                                })

                                : ''
                            }
                        </tbody>
                    </table>
                </div>


                <section className={`edit-blog ${isActive?'active':''}`}>
                <form action="" onSubmit={(e) => editBlog(e)} encType="multipart/form-data">
                    <div className="writer-info">
                        <h2>Edit Writer's Information</h2>
                        <div className="writer-image">
                            <label htmlFor="writer-image">
                                {writerImage ? <img src={writerImage} alt="" /> : <img src={Avatar} alt="" />}
                                <div className="dim">
                                    <AiOutlineCloudUpload />
                                    <p>Upload Image</p>
                                </div>
                            </label>
                            <input
                                type="file"
                                name="writer-image"
                                id="writer-image"
                                onChange={(e) => {
                                    // setWriterImage(e.target.files[0]);
                                    setWriterImage(URL.createObjectURL(e.target.files[0]));
                                    setWriterImagePath(e.target.files[0])
                                }}
                            />
                        </div>
                        <label htmlFor="writer-image">
                            <p>Upload New Writer Image</p>
                        </label>

                        <div className="writer-name">
                            <label htmlFor="writer-name">Writer Name:</label>
                            <input type="text" name="writer-name" id="writer-name" value={writerName} placeholder="Writer's Name" onChange={(e) => setWriterName(e.target.value)} />
                        </div>
                    </div>
                    <div className="blog-contents">
                        <label htmlFor="thumbnail"><h2>Edit Thumbnail</h2></label>
                        <div className="thumbnail">
                            {/* <label htmlFor="thumbnail"></label> */}
                            {/* <input type="file" name="thumbnail" id="thumbnail"/> */}

                            <label htmlFor="thumbnail">
                                {thumbnailImage ? <img src={thumbnailImage} alt="" /> : <img src={Thumbnail} alt="" />}
                            </label>
                            <input
                                type="file"
                                name="thumbnail"
                                id="thumbnail"
                                onChange={(e) => {
                                    // setWriterImage(e.target.files[0]);
                                    setThumbnailImage(URL.createObjectURL(e.target.files[0]));
                                    setThumbnailImagePath(e.target.files[0])
                                }}
                            />
                        </div>

                        <div className="heading">
                            <label htmlFor="heading"></label>
                            <input type="text" name="heading" id="heading" value={blogHeading} placeholder="Enter Heading Here ..." onChange={(e) => setBlogHeading(e.target.value)} />
                        </div>

                        <div className="content">
                            <label htmlFor="content"></label>
                            <textarea name="content" id="content" value={blogContent} placeholder="Enter Your Blog Content ..." onChange={(e) => setBlogContent(e.target.value)}></textarea>
                        </div>

                        <div className="upload-btn">
                            <button type="submit">Update Blog</button>
                        </div>

                        <div className="cross-btn"  onClick={()=>setIsActive(false)}>
                            <button type="button"><ImCross/>Cancle</button>
                        </div>
                    </div>
                </form>
            </section>
            </>
        )
        :
        (
            <>
                <AdminNavigation />
                <div className="blogs-table">
                    <div className="buttons">
                        <div className="add-button" onClick={() => navigate('/add-blog')}><BiPlusMedical /><p>Add Blog</p></div>
                        <div className="clear-button" onClick={() => clearAll()}><RiDeleteBinLine /><p>Clear All</p></div>
                    </div>
                    <div className="empty">
                        <FcEmptyFilter />
                        {msg}
                    </div>
                </div>
            </>
        )
}

export default Blogs;