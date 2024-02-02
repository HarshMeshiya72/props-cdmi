import { IoMailOpenOutline } from "react-icons/io5";
import { FaCertificate } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { CiYoutube } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
export default function Topinfo(props){
    return(
        <div className="nav">
        <div className="contenar">
          <div className="dflex">
            <div className="left">
              <div className="font"><i><IoMailOpenOutline></IoMailOpenOutline></i>{props.nvbar[0]}</div>
              <div><i><FaCertificate></FaCertificate></i> {props.nvbar[1]} </div>
            </div>
            <div className="middel">
              <div className="font1" >HAVE ANY QUESTION ? +91 90333 16003</div>
            </div>
            <div className="right">
              <div><i><FaFacebook></FaFacebook></i></div>
              <div><i><FiTwitter></FiTwitter></i></div>
              <div><i><TiSocialGooglePlus></TiSocialGooglePlus></i></div>
              <div><i><FaLinkedin></FaLinkedin></i></div>
              <div><i><FiInstagram></FiInstagram></i></div>
              <div><i><CiYoutube></CiYoutube></i></div>
              <div><i><FaWhatsapp></FaWhatsapp></i></div>
            </div>
          </div>
        </div>
      </div>
    );
}