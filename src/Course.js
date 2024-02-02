import { FaStar } from "react-icons/fa";
import { IoIosStarHalf } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
const Course = (props) => {
    return (
        <div className='contenar'>
            <div className='course '>
                <div className='cour p-t p-b'>
                    <h4>CREATIVE COURSE</h4>
                    <h2>OFFERED COURSES</h2>
                </div>
                <div className='c-box'>
                    {
                        props.data.map((ele) => {
                            return (
                                <div className='box1'>
                                    <img src={ele.url}></img>
                                    <h3>{ele.title}</h3>
                                    <div className='star'>
                                        <div><i><FaStar ></FaStar ></i><i><FaStar ></FaStar ></i><i><FaStar ></FaStar ></i><i><FaStar ></FaStar ></i><i><IoIosStarHalf ></IoIosStarHalf ></i></div>
                                        <div><button>{ele.button}</button></div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <div className='btn'>
                    <button>View All Courses<i className='aerr'><FaArrowRightLong></FaArrowRightLong></i></button>
                </div>
            </div>
        </div>
    );
}
export default Course;