import React, { useEffect, useState } from "react";
import './SingleBlog.scss';
import NavBar from "../../NavBar/NavBar";
import Axios from "axios";
import ip from "../../../ip-config/ip";
import imgPath from "../../../ip-config/imgPath";
const SingleBlog = () => {
    const [mainBlog, setMainBlog] = useState([])
    const [recentBlogs, setRecentBlogs] = useState([])
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const paramValue = urlParams.get('id');

        const fetchSingleBlog = async () =>{
            await Axios.get(`https://${ip}/api/admin/recent`,{
                params: {
                    post_id: paramValue
                }
            }).then((response) =>{
                // setMainBlog(response.data);
                if(response.data.success === 1){
                    setMainBlog(response.data.mainData)
                    setRecentBlogs(response.data.recentData)
                }
            });
        }
        fetchSingleBlog();
      }, []);


    // useEffect(() => {
    //     const urlParams = new URLSearchParams(window.location.search);
    //     const paramValue = urlParams.get('id');
    //     setBlogId(paramValue);
    
    //     const fetchSingleBlog = async () => {
    //       try {
    //         const response = await Axios.get(`https://${ip}/api/admin/postthree`, {
    //           params: {
    //             post_id: paramValue
    //           }
    //         });
    //         console.log(paramValue)
    //         setBlogs(response.data.data);
    //         console.log(response.data);
    //       } catch (error) {
    //         console.error(error);
    //       }
    //     };
    
    //     fetchSingleBlog();
    //   }, []);

    return(
        <>
            <NavBar blogs='blogs-opt'/>
            <section className="single-blog-page">
                {
                    mainBlog?
                        mainBlog.map((blog)=>{
                            return(
                                <div className="single-blog">
                                    <h1>{blog.title} - {blog.writer_name}</h1>
                                    <div className="image">
                                        <img src={imgPath+blog.blog_image} alt="" />
                                    </div>
                                    <p>{blog.description}</p>
                                </div>
                            )
                        })
                    :
                        ''   
                }
                

                <div className="other-blogs">
                    <h2>Other Blogs</h2>
                    {
                        recentBlogs?
                            recentBlogs.map((blog)=>{
                                return(
                                    <div className="blog">
                                        <div className="image" onClick={()=>{window.location.href=`/blog?id=${blog.post_id}`}}>
                                            <img src={imgPath+blog.blog_image} alt="" />
                                        </div>
                                        <h4 onClick={()=>{window.location.href=`/blog?id=${blog.post_id}`}}>{blog.title} - {blog.writer_name}</h4>
                                        <button onClick={()=>{window.location.href=`/blog?id=${blog.post_id}`}}>Read More</button>
                                    </div>
                                )
                            })
                        :
                            ''   
                    }
                    {/* <div className="blog">
                        <div className="image">
                            <img src={require('../../../assets/Img/sunflower.jpg')} alt="" />
                        </div>
                        <h4>The overlooked benefits of real Christmas tree - Dr. Suyog Shakya</h4>
                        <button>Read More</button>
                    </div>

                    <div className="blog">
                        <div className="image">
                            <img src={require('../../../assets/Img/sunflower.jpg')} alt="" />
                        </div>
                        <h4>The overlooked benefits of real Christmas tree - Dr. Suyog Shakya</h4>
                        <button>Read More</button>
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default SingleBlog;