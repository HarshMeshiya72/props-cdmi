import { FaAngleDown } from "react-icons/fa6";
import logo from './image/1.svg';
const Header = (props) => {
    return (
        <div className='contenar'>
            <div className='dflex'>
                <div className='logo'>
                    <img src={logo}></img>
                </div>
                <div className='menu'>
                    <ul className='mainmenu'>
                        <li>{props.data[0]}</li>
                        <li>{props.data[1]}<i className='one'><FaAngleDown></FaAngleDown></i></li>
                        <li>{props.data[2]}<i className='one'><FaAngleDown></FaAngleDown></i></li>
                        <li>{props.data[3]}<i className='one'><FaAngleDown></FaAngleDown></i></li>
                        <li>{props.data[4]}<i className='one'><FaAngleDown></FaAngleDown></i></li>
                        <li>{props.data[5]}<i className='one'><FaAngleDown></FaAngleDown></i></li>
                        <li>{props.data[6]}<i className='one'><FaAngleDown></FaAngleDown></i></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Header;