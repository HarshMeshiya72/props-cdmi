export default function Student(props) {
    return (
        <div>
            <div className='student'>
                <div className='stuimg'>
                    {
                        props.data.map((ele) => {
                            return (
                                <div className='ImgBox'>
                                    <img src={ele.img}></img>
                                    <h4 style={{margin:'0px',color:'white'}}>{ele.num}</h4>
                                    <h5 style={{margin:'0px',color:'white'}}>{ele.name}</h5>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}
