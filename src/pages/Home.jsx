import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  

    useEffect(() => {
        axios.get('http://localhost:1337/api/blog-posts?populate=*')
            .then(response => {
                console.log("Fetched Data:", JSON.stringify(response.data, null, 2)); 
                setPosts(response.data.data || []);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
                setPosts([]);
            });
    }, []);

    return (
        <div className='container homeContainer'>
           <div className='row upperHome'>
            <div className='homeAside1'>
              <blockquote className='blockquote homeBlockquote'>"And we know that all things work together 
                for good to those who love God, to those who are the called according to His purpose."</blockquote>
                <p className='founder homeCaption'>Romans 8:28 (NKJV)</p>
                </div>
                <div className='homeAside2'>
                <figure className='homeImgFigure'>
                    <img 
                    src={`../images/homeImg.png`}
                    alt='home image'
                    className="homeImg"
                />
                </figure>
                </div>  
           </div>
           <div className='row midHome'>
           <div className='homeAside3'>
            <h4 className='midHomeTitle1'>Worship</h4>
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
            <h4 className='midHomeTitle2'>Books</h4>
                <figure className='homeImgFigure2'>
                    <img 
                    src={`../images/blogImg1.jpg`}
                    alt='home image'
                    className="homeImg2"
                />
                </figure>
                </div>  
           </div>
           <div className='lowerHome'>
            <h3 className='subscribeTitle'>GET MY LATEST ARTICLES IN YOUR INBOX</h3>
            <h6 className='subscribeDescription'>Sign up and join the Transformation community members who follow my writing. 
                You will also receive my latest articles on Worship, Devotion, Faith, Service, Family, 
                Business and many more!
            </h6>
            <div className='homeForm'>
              <form className='subscribeForm' action="post">
                <div><input className='enterEmail' type="email" placeholder='Your email address' />
                     <button className='subscribe' type='submit'>Subscribe</button>               
                </div>
              </form>
              </div>
           </div>
        </div>
    )
};

export default Home;
