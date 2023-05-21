import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const BlogContent = () =>{
    const [blog, setBlog] =useState([])
    const {id} = useParams()
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setBlog(data)
        }).catch(err => console.log(err))
    })
    return(
        <div className="blog__content">
            <div className="blog__content-header">
                <h1>JoBlogs Page</h1>
            </div>

            <div className="blog__content-body">
                <h2>{blog.title}</h2>
                <p>{blog.body}</p>
                <Link className="link" to="/blogs">Back to our blogs</Link>
            </div>
        </div>
    )
}
export default BlogContent