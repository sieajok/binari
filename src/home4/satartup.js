import  './satartup.css';
import img from './../img/D.PNG'
import img1 from './../img/aku1.png';
import img2 from './../img/aku2.png';
import img3 from './../img/aku3.png';
import img4 from './../img/aku4.png';
import img5 from './../img/aku5.png';
import img6 from './../img/aku6.png';



function Satartup() {
  return (

    <div className='amak'>
    <div className='ayam'>
        
    <h2 className='anak-ayam' style={{paddingTop:"200px", color:"white", fontWeight:"bold", fontSize:"50px"}}>Startup Kami</h2>
        
    </div>


<div className='kuda'>

    <h1>Startup Kebanggaan Kami</h1>
    <h3>“Any time is a good time to start a company.” - Ron Conway</h3>

    <div className="cards-list">
  <div className="card 1">
    <div className="card_image">
      <img src={img1}/>
    </div>
    <div className="card_title title-white">
      
    </div>
  </div>
  <div className="card 2">
    <div className="card_image">
      <img src={img2} />
    </div>
    <div className="card_title title-white">
     
    </div>
  </div>
  <div className="card 3">
    <div className="card_image">
      <img src={img3}/>
    </div>
    <div className="card_title">
     
    </div>
  </div>
  <div className="card 4">
    <div className="card_image">
      <img src={img4}/>
    </div>
    <div className="card_title title-black">
     
    </div>
  </div>
</div>


    </div>
    <div className="cards-list">
  <div className="card 1">
    <div className="card_image">
      {" "}
      <img src={img5}/>
    </div>
    <div className="card_title title-white">
      
    </div>
  </div>
  <div className="card 2">
    <div className="card_image">
      <img src={img6} />
    </div>
    <div className="card_title title-white">
      
    </div>
  </div>
  
  </div>
 </div>
 
  );
}

export default Satartup;
  