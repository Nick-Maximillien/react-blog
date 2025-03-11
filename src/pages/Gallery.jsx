const Gallery = () => {
    return (
        <div>
                  <h1 class="emailTitle">Photos</h1> 
        <div>
            <div className='homeAside2'>
            <figure className='homeImgFigure'>
                <img 
                src={`../images/img1.jpg`}
                alt='home image'
                className="homeImg"
            />
            </figure>
            </div>
            <div className='homeAside2 videoHome'>
            <figure className='homeImgFigure videoFig'>
                <img 
                src={`../images/video.png`}
                alt='home image'
                className="homeImg videoImg"
            />
            </figure>
            </div>   
       </div>
       <div className='row midHome'>
       <div className='homeAside3'>
            <figure className='homeImgFigure1'>
                <img 
                src={`../images/midHomeImg.png`}
                alt='home image'
                className="homeImg1"
            />
            </figure>
            <figure className='homeImgFigure1'>
                <img 
                src={`../images/midHomeCopy.png`}
                alt='home image'
                className="homeImg1"
            />
            </figure>
            </div>
            <div className='homeAside4'>
            <figure className='homeImgFigure2'>
                <img 
                src={`../images/img2.jpg`}
                alt='home image'
                className="homeImg2"
            />
            </figure>
            </div>  
       </div>
       <div>
            <div className='homeAside2'>
            <figure className='homeImgFigure'>
                <img 
                src={`../images/img3.jpg`}
                alt='home image'
                className="homeImg"
            />
            </figure>
            </div>
            <div className='homeAside2'>
            <figure className='homeImgFigure'>
                <img 
                src={`../images/img4.jpg`}
                alt='home image'
                className="homeImg"
            />
            </figure>
            </div>   
       </div>
       <div className='homeAside4'>
            <figure className='homeImgFigure2'>
                <img 
                src={`../images/img5.jpg`}
                alt='home image'
                className="homeImg2"
            />
            </figure>
            </div>
            <div className='homeAside3'>
            <figure className='homeImgFigure1'>
                <img 
                src={`../images/midHomeImg.png`}
                alt='home image'
                className="homeImg1"
            />
            </figure>
            <figure className='homeImgFigure1'>
                <img 
                src={`../images/img6.jpg`}
                alt='home image'
                className="homeImg1"
            />
            </figure>
            </div>
            <div className='row midHome'>
       <div className='homeAside3'>
            <figure className='homeImgFigure1'>
                <img 
                src={`../images/midHomeImg.png`}
                alt='home image'
                className="homeImg1"
            />
            </figure>
            <figure className='homeImgFigure1'>
                <img 
                src={`../images/midHomeCopy.png`}
                alt='home image'
                className="homeImg1"
            />
            </figure>
            </div>
            <div className='homeAside4'>
            <figure className='homeImgFigure2'>
                <img 
                src={`../images/img7.jpg`}
                alt='home image'
                className="homeImg2"
            />
            </figure>
            </div>  
       </div>
     </div>
    )
}

export default Gallery;