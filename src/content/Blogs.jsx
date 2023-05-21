import { useEffect, useState } from "react"
import Blog from "./Blog"

const Blogs = () =>{
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        const fetchBlogs = () =>{
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => {
                setBlogs(data)
                console.log(data);
            })
        }
        fetchBlogs()
    }, [])
    return(
        <div className="blogs">
            <div className="blog-header">JBlogs</div>

            <div className="blogs-container">
                {
                    blogs.map((blog, index) =>{
                        return(
                            <Blog key={index} title={blog.title} body={blog.body} blogId={blog.id} />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Blogs