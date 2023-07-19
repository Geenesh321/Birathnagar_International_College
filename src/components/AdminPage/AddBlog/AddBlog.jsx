import React, { useState } from "react";
import './AddBlog.scss'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { ImCross } from 'react-icons/im'
import Avatar from '../../../assets/Admin/Profile.png'
import Thumbnail from '../../../assets/Admin/thumbnail.png'
import FormData from "form-data"
import Axios from "axios";
import AdminNavigation from "../AdminNavigation/AdminNavigation";
import { useNavigate } from "react-router-dom";
import ip from "../../../ip-config/ip";
const AddBlog = () => {

    const navigate = useNavigate()
    const [writerImage, setWriterImage] = useState(null)
    const [thumbnailImage, setThumbnailImage] = useState(null)

    const [writerImagePath, setWriterImagePath] = useState(null)
    const [writerName, setWriterName] = useState('')
    const [thumbnailImagePath, setThumbnailImagePath] = useState('')
    const [blogHeading, setBlogHeading] = useState('')
    const [blogContent, setBlogContent] = useState('')

    const [loading, setLoading] = useState(false)
    // const uploadBlog = (e) => {
    //     e.preventDefault();
    //     console.log(writerImagePath)
    //     console.log(writerName)
    //     console.log(thumbnailImagePath)
    //     console.log(blogHeading)
    //     console.log(blogContent)

    //     Axios.post("", {
    //         title: blogHeading,
    //         description: blogContent,
    //         blog_image: thumbnailImagePath,
    //         writer_image: writerImagePath,
    //         writer_name: writerName
    //     }).then((response) => {
    //         console.log(response)
    //     })
    // }

    const uploadBlog = async (event) => {
        event.preventDefault();
        setLoading(true)
        try {
            const formData = new FormData();
            formData.append('title', blogHeading);
            formData.append('description', blogContent);
            formData.append('blog_image', thumbnailImagePath);
            formData.append('writer_image', writerImagePath);
            formData.append('writer_name', writerName);

            await Axios.post(`https://${ip}/api/post`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }).then((response) => {
                if (response.data.success === 1) {
                    setLoading(false)
                    alert('Blog Added Successfully.')
                    navigate('/admin-page')
                }
            })

            
            // Handle the response
        } catch (error) {
            console.error('error is ',error);
            // Handle errors
        }
    };

    return (
        <>
            <AdminNavigation/>
            <section className="add-blog">
                <form action="" onSubmit={(e) => uploadBlog(e)} encType="multipart/form-data">
                    <div className="writer-info">
                        <h2>Writer's Information</h2>
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
                            <p>Upload Writer Image</p>
                        </label>

                        <div className="writer-name">
                            <label htmlFor="writer-name"></label>
                            <input type="text" name="writer-name" id="writer-name" placeholder="Writer's Name" onChange={(e) => setWriterName(e.target.value)} />
                        </div>
                    </div>
                    <div className="blog-contents">
                        <label htmlFor="thumbnail"><h2>Thumbnail</h2></label>
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
                            <input type="text" name="heading" id="heading" placeholder="Enter Heading Here ..." onChange={(e) => setBlogHeading(e.target.value)} />
                        </div>

                        <div className="content">
                            <label htmlFor="content"></label>
                            <textarea name="content" id="content" placeholder="Enter Your Blog Content ..." onChange={(e) => setBlogContent(e.target.value)}></textarea>
                        </div>

                        <div className="upload-btn">
                            {loading?<button className="loading">Uploading...</button>:<button type="submit">Upload Blog</button>}
                        </div>

                        <div className="cross-btn" onClick={()=>navigate('/admin-blogs')}>
                            <button><ImCross/>Cancle</button>
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}

export default AddBlog