import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
export default function Logo(props) {
    return (
        <div className='contenar'>
            <div className='plasment'>
                <div className=' p-t p-b'>
                    <h4>STUDENT PLACEMENT</h4>
                    <h2>OUR RECRUITMENT PARTNERS</h2>
                </div>
                <div className='plas'>
                    <OwlCarousel className='owl-theme' loop margin={10} items={5} nav={false}>
                       
                            {
                                props.logo.map((ele)=>{
                                    return(
                                        <div className='item'>
                                        <img src={ele.url}></img>
                                        </div>
                                    );
                                })
                            }
                    </OwlCarousel>;
                </div>
            </div>
        </div>
    );
}