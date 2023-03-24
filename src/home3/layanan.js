import  './layanan.css';
import img from './../img/layanan.png';
import img2 from './../img/layanan2.png';
import img3 from './../img/layanan3.png';
import img4 from './../img/layanan4.jpg';
import img5 from './../img/layanan5.png';
import img6 from './../img/layanan6.png';
import { Link } from 'react-router-dom';



function Tentang() {
  return (

    <div className='amakk'>
    <div className='ayamy'>
    <h2 className='anak-ayamy' style={{paddingTop:"200px", color:"white", fontWeight:"bold", fontSize:"50px"}}>Program Kami</h2>
    
    </div>


<div className='kuda'>

    <h1>Kami menyediakan berbagai macam layanan bisnis.</h1>
    

    </div>
    

    <section className="articles">
  <article>
    <div className="article-wrapper">
      <figure>
        <img src={img} />
      </figure>
      <div className="article-body">
        <a href='/laystarup'><h2>Program Inkubasi Startup</h2></a>
        <p>
        Satu tahun program Inkubator dengan kesempatan pendanaan sampai 350 juta rupiah / perusahaan.
        </p>
      </div>
    </div>
  </article>
  <article>

    <div className="article-wrapper">
      <figure>
        <img src={img2} />
      </figure>
      <div className="article-body">
      <a href='/laystarup1'> <h2>Kegiatan Workshop</h2> </a>
        <p>
        Perdalam ilmu melalui Binari Startup Class dan Binari Startup Talk.
        </p>
      </div>
    </div>
  </article>
  <article>

    <div className="article-wrapper">
      <figure>
        <img src={img3}/>
      </figure>
      <div className="article-body">
      <a href='/laystarup2'> <h2>Jaringan Investor</h2></a>
        <p>
        Berkesempatan Networking dan Business Matching bersama Investor.
          </p>
      </div>
    </div>
  </article>
</section>

<section className="articles">
  <article>
    <div className="article-wrapper">
      <figure>
        <img src={img4}/>
      </figure>
      <div className="article-body">
      <a href='/laystarup3'> <h2>Lab Penelitian</h2></a>
        <p>
        Binari Lab Penelitian fokus dalam penelitian pada UMKM dan Startup.
        </p>
        
      </div>
    </div>
  </article>
  <article>

    <div className="article-wrapper">
      <figure>
        <img src={img5}/>
      </figure>
      <div className="article-body">
      <a href='/laystarup4'> <h2>Workspace</h2></a>
        <p>
        Daptakan Ekosistem kerja nyaman di coworking space (Workspace 53).
        </p>
      
      </div>
    </div>
  </article>
  <article>

    <div className="article-wrapper">
      <figure>
        <img src={img6} />
      </figure>
      <div className="article-body">
      <a href='/laystarup5'> <h2>Konsultasi Event</h2></a>
        <p>
        Rencanakan eventmu dengan Binari sebagai Event Organizernya.
        </p>
      
      </div>
    </div>
  </article>
</section>
    </div>

  );
}

export default Tentang;
  