import { Link } from "react-router-dom"

const Blog = ({blogId, title, body}) =>{
    return(
        <Link className="blog-card" to={`/blogs/${blogId}`}>
            <div className="blog">
                <h1>{title}</h1>
                <p>{body.slice(0, 70)}...</p>
            </div>
        </Link>
    )
}
export default Blog