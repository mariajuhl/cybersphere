import logo from "../images/orangelogo.svg";
import bølge from "../images/bølge.svg";

export default function Footer() {

    return (
            <footer>
            <div id="wave-section">
                <img className="bølge" src={bølge} alt="Bølge" />
            </div>
                
                <div className="footer">
                        <div>
                        <p>cybersphere@kontakt.dk</p> 

                        <p>+45 12245069</p> 

                        <a href="https://www.linkedin.com/" target="_blank">LinkedIn</a> 
                        </div>

                        <div className="logo">
                            <a href={"/#top"}><img src={logo} alt="logo"/></a>
                        </div>

                        <div className="textAlignRight">
                        <p>Christiansgade 32</p> 

                        <p>8000 Aarhus C</p> 

                        <p>CVR 52342012</p> 
                        </div>
                </div>
            </footer>
    )
}