import  './tentang.css';
import img from './../img/D.PNG'
import img1 from './../img/gmbr1.jpg';
import img2 from './../img/gmbr2.jpg';
import img3 from './../img/gmbr3.jpg';
import img4 from './../img/gmbr4.jpg';
import img5 from './../img/gmbr5.png';
import img6 from './../img/vitradisa.png';
import img7 from './../img/Asepsaepu.jpg';



function Tentang() {
  return (

    <div className='amako'>
    <div className='ayamc'>
    <h2 className='anak-ayamn'style={{paddingTop:"200px", color:"white", fontWeight:"bold", fontSize:"50px"}}>Tentang Binari</h2>
    
    </div>


<div className='kuda'>

    <h2>SELAMAT DATANG DI BINARI</h2>
    <h4>Binari inkubator merupakan program Inkubasi startup melalui serangkaian seleksi mulai dari bootcamp, mentoring beasiswa hingga akses funding.</h4>

    </div>

    <div className='visi'>
      <div className='profil mt-10 pt-[80px]' style={{paddingTop:"50px"}}>
        <div className="profiltentang_1">
        <img src={img}  className='mr-36' alt="" height={200} width={200}/>
            <div className="kataa2">
            <h2 className='ml-20 text-4xl'>VISI</h2>
                <p className="kataa4">
                Visi kami adalah menjadi Inkubator terbaik untuk Startups bidang teknologi informasi dan komunikasi di Indonesia.
                </p>
            </div>
        </div>
    </div>



  <div className='profil mb-50'>
        <div className="profiltentang_2">
        <img src={img}  className='' alt="" height={200} width={200}/>
            <div className="kataa1">
            <h2 className='ml-4 text-4xl'>MISI</h2>
                <p className="kataa2">
                Mengelola program Inkubator yang berfokus pada solusi dan inovasi berkelanjutan.
Menyediakan fasilitas yang mendorong Startup untuk menjadi kreatif dan produktif.
Menjadi penghubung untuk Startup dengan sinergi program dan kolaborasi dengan investor, pemerintah, perusahaan, akademisi, media dan komunitas.
Mengelola pendanaan yang menguntungkan dan modal pertumbuhan untuk Investor dan Startup.
                </p>
            </div>
        </div>
    </div>
 
    </div>

    <h1>TIM KAMI</h1>

    <section className="articles">
  <article>
    <div className="article-wrapper">
      <figure>
        <img src={img1} />
      </figure>
      <div className="article-body">
        <h2>Yoanes Bandung</h2>
        <p>
        Incubator Manager
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
        <h2>Armein Z R Langi</h2>
        <p>
        Chief Of Partnership
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
        <h2>Dwi Hendratmo Widyantoro</h2>
        <p>
        General Manager Binari
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
        <h2>Mervin T. Hutabarat</h2>
        <p>
        Chief Of Marketing
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
        <h2>M. Fahmi Nurfadillah</h2>
        <p>
        IT Staff
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
        <h2>Mohammad Maulana</h2>
        <p>
        Busdev. Manager Binari
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
        <h2>Vitradisa</h2>
        <p>
        Corporate Secretary
        </p>
      
      </div>
    </div>
  </article>
  <article>

    <div className="article-wrapper">
      <figure>
        <img src={img7} />
      </figure>
      <div className="article-body">
        <h2>Asep Saepuloh</h2>
        <p>
        Idventure Manager
        </p>
      
      </div>
    </div>
  </article>
</section>

    </div>
  );
}

export default Tentang;
  