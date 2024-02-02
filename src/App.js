import './App.css';
import s1 from './image/15.jpg';
import sp1 from './image/18.png';
import logo2 from './image/28.svg';
import { FaFacebook,FaHandPointRight, FaWhatsapp } from "react-icons/fa";
import { FiTwitter,FiInstagram } from "react-icons/fi";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { RiDoubleQuotesR } from "react-icons/ri";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import { BsBank } from "react-icons/bs";
import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Topinfo from './Topinfo';
import Header from './Header';
import Slider from './Slider';
import Course from './Course';
import About from './About';
import Creativ from './Creativ';
import Logo from './Logo';
import Student from './Student';
function App() {
  const nvbar = ['info@cdmi.in', ' Verify Certificate'];
  const data=['HOME','COURSES','ACTIVITIES','BLOG','KNOW US','GET IN TOUCH','STUDENT ZONE']
  var slider = [
    {slide : require('./image/2.webp')},
    {slide : require('./image/22.webp')},
    {slide : require('./image/222.jpg')},
  ]
  const wh = [
    {
      wh_title : 'Industry Experts As Trainers',
      wh_con : 'Our trainers have 5+ years of industry experience coupled with extensive research and analysis.',
      wh_img : require('./image/19.jpg')
    },
    {
      wh_title : 'Industry Experts As Trainers',
      wh_con : 'Our trainers have 5+ years of industry experience coupled with extensive research and analysis.',
      wh_img :  require('./image/19.jpg')
    },
    {
      wh_title : 'Industry Experts As Trainers',
      wh_con : 'Our trainers have 5+ years of industry experience coupled with extensive research and analysis.',
      wh_img :  require('./image/19.jpg')
    },
    {
      wh_title : 'Industry Experts As Trainers',
      wh_con : 'Our trainers have 5+ years of industry experience coupled with extensive research and analysis.',
      wh_img :  require('./image/19.jpg')
    },
    {
      wh_title : 'Industry Experts As Trainers',
      wh_con : 'Our trainers have 5+ years of industry experience coupled with extensive research and analysis.',
      wh_img :  require('./image/19.jpg')
    },
    {
      wh_title : 'Industry Experts As Trainers',
      wh_con : 'Our trainers have 5+ years of industry experience coupled with extensive research and analysis.',
      wh_img :  require('./image/19.jpg')
    }  
  ]
  const box = [
    {
      title: "Development Courses",
      button: "Know more",
      url: require('./image/3.webp')
    },
    {
      title: "Development Courses",
      button: "Know more",
      url:require('./image/4.webp')

    },
    {
      title: "Development Courses",
      button: "Know more",
      url: require('./image/5.webp')
    },
    {
      title: "Development Courses",
      button: "Know more",
      url:require('./image/6.webp')
    },
    {
      title: "Development Courses",
      button: "Know more",
      url: require('./image/7.webp')
    },
    {
      title: "Development Courses",
      button: "Know more",
      url: require('./image/8.webp')
    },
  ]
  const about ={
    title: 'ABOUT US',
    con: 'IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!',
    content: 'Creative Design & Multimedia Institute(CDMI)  is a reputed training institute in Gujarat for Data Science, Machine Learning, Blockchain Development, AR/VR Game Development, Full Stack Web Development, Web Design, Game Design, Mobile App Development, Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields.Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.',
    btn: 'Enroll Now..!',
    img: require('./image/9.webp')
  }
  var logo = [
    {url : require('./image/20.jpg')},
    {url : require('./image/21.png')},
    {url : require('./image/22.png')},
    {url : require('./image/23.png')},
    {url : require('./image/24.png')},
    {url : require('./image/25.png')},
  ]

  const stdDtl =[
    {name:'HAPPY STUDENT', num:'18000+',img: require(`./image/29.png`)},
    {name:'CERTIFICATION APPROVAL', num:'10+',img: require(`./image/32.png`)},
    {name:'CERTIFIED TEACHERS', num:'100+',img: require(`./image/31.png`)},
    {name:'STUDENTS PLACED', num:'12000+',img: require(`./image/32.png`)},
  ]
  return (
    <div>
      {/*--------------------------------- nav start------------------------------ */}
      
      <Topinfo nvbar={nvbar}/>
      {/* ---------------------------nav end----------------------------------------- */}


      {/*--------------------------- menu start--------------------------------------- */}
     
      <Header data={data}/>
      {/*--------------------------- menu end--------------------------------------- */}

      {/*--------------------------- slider start--------------------------------------- */}
      {/* <div className='slider'>
        <OwlCarousel className='owl-theme' loop margin={10} items={1} nav={false}>
          <div class='item'>
            <img src={slider1}></img>
          </div>
          <div class='item'>
            <img src={slider2}></img>
          </div>                                                                                            
          <div class='item'>
            <img src={slider3}></img>
          </div>

        </OwlCarousel>;
      </div> */}
      <Slider simg = {slider}/>
      {/*--------------------------- slider end--------------------------------------- */}

      {/*--------------------------- COURSE start--------------------------------------- */}
      {/* <div className='contenar'>
        <div className='course '>
          <div className='cour p-t p-b'>
            <h4>CREATIVE COURSE</h4>
            <h2>OFFERED COURSES</h2>
          </div>
          <div className='c-box'>
            <div className='box1'>
              <img src={c1}></img>
              <h3>Development Courses</h3>
              <div className='star'>
                <div><i><FaStar ></FaStar ></i><i><FaStar ></FaStar ></i><i><FaStar ></FaStar ></i><i><FaStar ></FaStar ></i><i><IoIosStarHalf ></IoIosStarHalf ></i></div>
                <div><button>Know more..!</button></div>
              </div>
            </div>
            <div className='box1'>
              <img src={c2}></img>
              <h3>Design Courses</h3>
              <div className='star'>
                <div><i><FaStar ></FaStar ></i><i><FaStar ></FaStar ></i><i><FaStar ></FaStar ></i><i><FaStar ></FaStar ></i><i><IoIosStarHalf ></IoIosStarHalf ></i></div>
                <div><button>Know more..!</button></div>
              </div>
            </div>
            <div className='box1'>
              <img src={c3}></img>
              <h3>Programming IT</h3>
              <div className='star'>
                <div><i><FaStar ></FaStar ></i><i><FaStar ></FaStar ></i><i><FaStar ></FaStar ></i><i><FaStar ></FaStar ></i><i><IoIosStarHalf ></IoIosStarHalf ></i></div>
                <div><button>Know more..!</button></div>
              </div>
            </div>
          </div>
          <div className='c-box'>
            <div className='box1'>
              <img src={c4}></img>
              <h3>Trendy Courses</h3>
              <div className='star'>
                <div><i><FaStar ></FaStar ></i><i><FaStar ></FaStar ></i><i><FaStar ></FaStar ></i><i><FaStar ></FaStar ></i><i><IoIosStarHalf ></IoIosStarHalf ></i></div>
                <div><button>Know more..!</button></div>
              </div>
            </div>
            <div className='box1'>
              <img src={c5}></img>
              <h3>Civil-Mech. Engineering</h3>
              <div className='star'>
                <div><i><FaStar ></FaStar ></i><i><FaStar ></FaStar ></i><i><FaStar ></FaStar ></i><i><FaStar ></FaStar ></i><i><IoIosStarHalf ></IoIosStarHalf ></i></div>
                <div><button>Know more..!</button></div>
              </div>
            </div>
            <div className='box1'>
              <img src={c6}></img>
              <h3>Business Development</h3>
              <div className='star'>
                <div><i><FaStar ></FaStar ></i><i><FaStar ></FaStar ></i><i><FaStar ></FaStar ></i><i><FaStar ></FaStar ></i><i><IoIosStarHalf ></IoIosStarHalf ></i></div>
                <div><button>Know more..!</button></div>
              </div>
            </div>
          </div>
          <div className='btn'>
            <button>View All Courses<i className='aerr'><FaArrowRightLong></FaArrowRightLong></i></button>
          </div>
        </div>
      </div> */}
      <Course data={box}/>
      {/*--------------------------- COURSE end--------------------------------------- */}


      {/*------------------------------about us start---------------------------------------  */}

      <About about={about}/>

      {/*------------------------------about us end ---------------------------------------  */}

      {/*------------------------------student start ---------------------------------------  */}
      
      <Student data={stdDtl} ></Student>

      {/*------------------------------student end ---------------------------------------  */}

      {/* -----------------------------speak start----------------------------------- */}
      <div className='contenar'>
        <div className='speak'>
          <div className='speak-sli'>
            <h5>HAPPY STUDENTS</h5>
            <h1>ALUMNI SPEAK</h1>
            <div className='couta'>
              <div className='s-cq'> <i><RiDoubleQuotesR></RiDoubleQuotesR></i></div>
              <div className='s-ar'><i className='ab'><IoIosArrowBack></IoIosArrowBack></i><i className='af'><IoIosArrowForward></IoIosArrowForward></i></div>
            </div>
            <p>Trainers are good and very supportive.
              creative multimedia institute provide lot of opportunities to get placed.I am happy to joined creative multimedia institute.</p>
            <div className='s-dflex'>
              <div>
                <img src={s1} className='s-img'></img>
              </div>
              <div>
                <p> Patel Harsh</p>
                <h4>NodeJs Development</h4>
              </div>
            </div>
          </div>
          <div className='speak-im'>
            <img src={sp1}></img>
          </div>
        </div>
      </div>


      {/* -----------------------------speak end----------------------------------- */}

      {/*---------------------------------------  CREATIVE  start----------------------------*/}

      {/* <div className='.cre-con'>
        <div className='contenar'>
          <div className='cretiv'>
            <div className='cret p-t p-b'>
              <h4>READ OUR DIFFERENCE</h4>
              <h2>WHY CHOOSE CREATIVE</h2>
            </div>
            <div className='cre-box'>
              <div className='box2'>
                <img src={cre1}></img>
                <h4>Industry Experts As Trainers</h4>
                <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
              </div>
              <div className='box2'>
                <img src={cre1}></img>
                <h4>Industry Experts As Trainers</h4>
                <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
              </div>
              <div className='box2'>
                <img src={cre1}></img>
                <h4>Industry Experts As Trainers</h4>
                <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
              </div>
            </div>
            <div className='cre-box p-b'>
              <div className='box2'>
                <img src={cre1}></img>
                <h4>Industry Experts As Trainers</h4>
                <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
              </div>
              <div className='box2'>
                <img src={cre1}></img>
                <h4>Industry Experts As Trainers</h4>
                <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
              </div>
              <div className='box2'>
                <img src={cre1}></img>
                <h4>Industry Experts As Trainers</h4>
                <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Creativ wh={wh}/>

      {/*---------------------------------------  CREATIVE  end----------------------------*/}

      {/* ------------------------------------------PLACEMENT start------------------------ */}
      <Logo logo={logo}/>
      {/* ------------------------------------------PLACEMENT end------------------------ */}

      {/*----------------------------------------paragraf start------------------------------  */}
      <div className='contenar'>
        <h2>Our Demanded Course -</h2>
        <div className='p-b'><i className='para'>Our Demanded Course -C Programming Language Training Institute</i><i className='para'>Lumion Training Institute In Katargam</i><i className='para'>Web Development Training Institute In Katargam</i>
          <i className='para'>Best Coreldraw Training Institute</i><i className='para'>Angular Js Training Course</i><i className='para'>Best It Course</i>
          <i className='para'>React Js Training Institute In Surat</i><i className='para'> Programming Language Course</i><i className='para'>Graphics Design Training In Varachha</i>
          <i className='para'>Ios App Training Institute In Surat</i><i className='para'>Codeigniter Training Institute In Mota Varachha Web Design Course In Surat Short Term Course Training Institute Computer Training Institute In Varachha Latest Technology Course Training Institute In Katargam Angular Js Training Institute In Mota Varachha Android App Development Institute React Js Training Institute In Katargam
          </i><i className='para'>Mechanical Engineering Training Course</i>
        </div>
      </div>
      {/*----------------------------------------paragraf end------------------------------  */}

      {/* -------------------------------------futter start----------------------------------- */}
      <div className='box-5c'>
        <div className='contenar'>
          <div className='con-fle'>
            <div className='box5'>
              <img src={logo2} className='img-2'></img>
              <p>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
              <h3>FOLLOW US ON</h3>
              <div className='icon2'>
                <div><i><FaFacebook></FaFacebook></i></div>
                <div><i><FiTwitter></FiTwitter></i></div>
                <div><i><TiSocialGooglePlus></TiSocialGooglePlus></i></div>
                <div><i><FaLinkedin></FaLinkedin></i></div>
                <div><i><FiInstagram></FiInstagram></i></div>
                <div><i><CiYoutube></CiYoutube></i></div>
                <div><i><FaWhatsapp></FaWhatsapp></i></div>
              </div>
            </div>
            <div className='box6'>
              <h3>FEATURE LINKS</h3>
              <div className='d-box6'>
                <div><i><FaHandPointRight></FaHandPointRight></i>About Us</div>
                <div><i><FaHandPointRight></FaHandPointRight></i>Blogs</div>
                <div><i><FaHandPointRight></FaHandPointRight></i>Join Us</div>
                <div><i><FaHandPointRight></FaHandPointRight></i>Company Login</div>
                <div><i><FaHandPointRight></FaHandPointRight></i>Certificate Verification</div>
              </div>
            </div>
            <div className='box7'>
              <h3>CONTACT US</h3>
              <h4>HEAD OFFICE - YOGICHOWK</h4>
              <h5>401-404, 4th Floor, City Center Complex, Nr. Yogichowk,<br></br> Varachha, Surat.<br></br>
                Mo : +91 90333 16003</h5>
              <h4>OTHER BRANCHES</h4>
              <h6><i><BsBank></BsBank></i>Katargam</h6>
              <h6><i><BsBank></BsBank></i>Mota Varachha</h6>
              <h6><i><BsBank></BsBank></i>Adajan</h6>
              <h6><i><BsBank></BsBank></i>Navsari</h6>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------------futter end----------------------------------- */}
    </div>

  );
}
export default App;