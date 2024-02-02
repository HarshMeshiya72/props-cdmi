import OwlCarousel from 'react-owl-carousel';
export default function Slider(props){
   return(
    <div>
    <OwlCarousel className="owl-theme" loop margin={10} items={1} nav dots={false}>
      {
          props.simg.map((ele) => {
              return(
                  <div className='item'>
                      <img src={ele.slide}></img>
                  </div>
              )
          })
      }
    </OwlCarousel>
  </div>
   );
}