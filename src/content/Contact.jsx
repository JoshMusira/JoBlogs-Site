
import { FaHome, FaInfoCircle, FaBook } from "react-icons/fa"

const Contact = () =>{
    return(
        <div className="contact">
            <p>{FaHome}</p>
            <h5>Contact</h5>
            <h6>We want to hear from you</h6>
            <div className="form">
                <form action="">
                    <label>Send us an Email</label><br /><br />
                    <input type="text" placeholder="Your name..." /><br /><br />
                    <input type="email" placeholder="Email address..." /><br /><br />
                    <textarea name="textarea" id="textarea" placeholder="Message..." ></textarea><br /><br />
                    <button className="send" >Send</button>
                </form>
            </div>
           <form action="">

           </form>
        </div>
    )
}
export default Contact