
const HomeContent = ({names, university,degree}) =>{


    return(
        <div className="personalContent">
            {/* <div className="profile">{image}</div> */}
            <div className="profileContent">
                <span> <b>Name:</b>  {names}</span>
                <span> <b>School:</b> {university}</span>
                <span><b>Degree: </b> {degree}</span>
            </div>
        </div>
    )
}
export default HomeContent;