import Navbar from "../nav/Navbar";
import Layanan from "../home3/layanan";
import img1 from './../img/layanan3.png';
import Footer from "../footer/footer";
import  './layanan.css';


const Laystarup = () => {
    return(
        <div>
        <Navbar />
        <div className='ayamy'>
            <h2 className='anak-ayamy' style={{paddingTop:"200px", color:"white", fontWeight:"bold", fontSize:"50px"}}>Program Kami</h2>
        </div>
        <div className="">
            <h2>Jaringan Investor</h2>
            <img src={img1} alt="" />
            <p>- Program PPBT
Setiap tahun Binari rutin mengikuti program PPTB yang diselenggarakan oleh Kementerian Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesian. Pada program ini para startup berkesempatan mendapatkan pendanaan hingga 350 juta rupiah.


- Business Matching
Selain itu Binari setiap tahun juga mengadakan Business Matching yang mempertemukan para startup dengan para investor. Pada acara Business Matching ini para startup berkesempatan langsung melakukan presentasi kepada investor tentang bisnis atau ide bisnis yang mereka punya.</p>
        </div>
     
        <Footer />
        </div>
    );
}

export default Laystarup;