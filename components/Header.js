import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

export default function Header() {

    return (
           <div className="logo">
            <Link to={"./"}>
                <img src={logo} alt="logo"/>
                </Link>
           </div>
    )
}
