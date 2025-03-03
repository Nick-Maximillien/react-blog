function About() {
    return (
      <div className="col-md-12 col-sm-12 col-xs-12 aboutMeGridA">
      <h1 className="aboutMeTitle">About.</h1>
      <p className="aboutMeText1">Thaddeus Muema William is a servant of God who
         handles diverse subjects of life:
         <figure className='aboutProfile'>
                    <img
                    src={`../images/blogProfile.jpg`}
                    alt='author profile'
                    className=""
                    />
              </figure>         
          <ul className="themes">
          <li className="theme1">Faith</li>
          <li className="theme2">Business</li>
          <li className="theme3">Marriage</li>
         </ul>
      </p>
      <p className="aboutMeText2">
        He is the founder of Transformation Mindset Global, a movement that provokes people to 
        seek personal transformation. He pastors Transformation Center - Tassia, Nairobi, Kenya; 
        a ministry committed to transforming  believers' lives by God's Word and true worship. <br />
        A family man, with his wife Angela, they are blessed with two daughters - Zawadi and Zanni.
      </p>
  </div>
    );
  }
  
  export default About;
  