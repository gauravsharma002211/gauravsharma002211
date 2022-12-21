import { Button, Nav, NavLink } from "react-bootstrap";
import CustomButton from "../Buttons/CustomButton";
import logo from '../../assets/images/logo.svg';

const Header = () => {
    return (
        <>
        <div className="pi-top-bar">
            <Nav.Link href="#"><img src={logo}/></Nav.Link>
            <CustomButton buttonTitle='LOGIN' />
        </div>
        </>

    )
}

export default Header;