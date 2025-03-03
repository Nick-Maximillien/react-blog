function Contact() {
    return (
      <div className="container contactPg col-md-12 col-sm-12 col-xs-12">
 <div className="gridAcontainer col-md-12 col-sm-12 col-xs-12"><h1 class="contactHead">Contact</h1></div>
 <div className="gridBcontainer col-md-12 col-sm-12 col-xs-12">
 <p className="inTouch">Get in touch with me via <a href="">Facebook</a> or 
 send me an email.</p>
   <p className="cell">Cell: +254700578163</p>
 </div>
 <div className="row gridF col-md-12 col-sm-12 col-xs-12">
  <div className="gridG col-md-8 col-sm-8 col-xs-8">
      <h1 class="emailTitle">Send me an E-mail</h1>
      <form className="nameAndMessage" action="">
              <label className="labels" for="name">Name:<br /> 
                  <input className="name" type="text" />
              </label><br />
              <label className="labels" for="email">Email:<br />
                  <input className="mail" type="email" />
              </label><br />
              <label className="labels messageLabel" for="">Message:<br />
                  <textarea class="message" name="" id=""></textarea>
              </label><br />
              <a href="mailTo:nicholasmuthoki@gmail.com"><button className="send">Send</button></a>
      </form>
  </div>
</div>
<section className="row sectionD col-md-12 col-sm-12 col-xs-12">
  <blockquote className="blockquote col-sm-12 col-xs-12">"For We are God's 
    <em> Masterpiece</em>. He has created us anew in Christ Jesus, so we can
    do the good things He planned for us long ago. "<p className="founder">Ephesians 2:10a.</p>
  </blockquote>
  </section>
</div>
    );
  }
  
  export default Contact;
  