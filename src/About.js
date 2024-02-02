import { FaArrowRightLong } from "react-icons/fa6";
export default function About(props) {
  return (
    <div className='aboutus'>
      <div className="aboutCover">
        <div className='about'>
          <h5>{props.about.title}</h5>
          <h4>{props.about.con}</h4>
          <p>{props.about.content}</p>
          <div className='btn1'>
            <button>{props.about.btn}<i className='aerr1'><FaArrowRightLong></FaArrowRightLong></i></button>
          </div>
        </div>
      </div>
      <div className='aboutImg'>
        <img src={props.about.img}></img>
      </div>
    </div>
  );
}