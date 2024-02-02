export default function Creativ(props) {
    return (
        <div className='.cre-con'>
            <div className='contenar'>
                <div className='cretiv'>
                    <div className='cret p-t p-b'>
                        <h4>READ OUR DIFFERENCE</h4>
                        <h2>WHY CHOOSE CREATIVE</h2>
                    </div>
                    <div className='cre-box'>
                        {
                            props.wh.map((ele) => {
                                return (
                                    <div className='box2'>
                                        <img src={ele.wh_img}></img>
                                        <h4>{ele.wh_title}</h4>
                                        <p>{ele.wh_con}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}