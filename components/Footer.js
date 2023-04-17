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
                        <h4>cybersphere@kontakt.dk</h4> 

                        <h4>+45 12345069</h4> 

                        <h4>LinkedIn</h4> 
                        </div>

                       
                        <img className="logo" src={logo} alt="logo"/>
                        

                        <div className="textAlignRight">
                        <h4>Gammel Kongevej 56</h4> 

                        <h4>1400 København K</h4> 

                        <h4>CVR 52342012</h4> 
                        </div>
                </div>
            </footer>
    )
}