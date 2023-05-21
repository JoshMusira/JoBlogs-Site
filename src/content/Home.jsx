import homephoto from "../assets/Woman.jpg"
import HomeContent from "./HomeContent"
import joshprofile from "../assets/artificial.jpg"
const Home = () =>{
    return(
      <div className="mainHome">
         <img id="homephoto" src={homephoto} alt="homephoto" />

            <div className="mainContent">
                <HomeContent names="Joshua Musira" university="Kirinyaga University" degree="Software Engineering"/>
                <HomeContent names="Judith Monah" university="Jomo Kenyatta" degree="Software Developer" />
                <HomeContent names="Austin Kuria" university="University of Nairobi" degree="Android Developer"/>
                <HomeContent names="Simon Maina" university="Egerton University" degree="System Engineer"/>
            </div>
      </div>
    )
}
export default Home

// image={ <img src = {joshprofile}></img>}