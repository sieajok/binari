import Navbar from "../nav/Navbar";
import Layanan from "../home3/layanan";
import img1 from './../img/layanan6.png';
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
            <h2>Konsultasi Event</h2>
            <img src={img1} alt="" />
            <p>Binari Research Lab fokus dalam penelitian pada UMKM dan Startup. Salah satu yang Binari Research Labs lakukan adalah Assessment untuk pinjaman lunak PKBL Pertamina MOR 3, sebanyak lebih dari 450 UMKM telah di assessment kelayakan usahanya bekerjasama dengan PT. Rekacipta Inocasi ITB.</p>
        </div>
     
        <Footer />
        </div>
    );
}

export default Laystarup;