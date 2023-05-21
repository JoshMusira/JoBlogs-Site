const Footer = () =>{
    const currentDate = new Date().toLocaleDateString();

    return(
        <footer className="footer">
            <div className="footerContainer">
                <p>joshuamusira38@gmail.com</p>
                <p>Current Date:{currentDate}</p>

            </div>
        </footer>
    )
}
export default Footer