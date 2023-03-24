import Navbar from "../nav/Navbar";
import Layanan from "../home3/layanan";
import img from './../img/layanan2.png';
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
            <h2>Kegiatan Workshop</h2>
            <img src={img} alt="" />
            <p>Startup Class dan Startup Talk



Startup Class dan Startup Talk adalah kelas pembelajaran yang khusus diadakan oleh Binari. Pengisi materi Startup Class dan startup Talk adalah para ahli di bidangnya yang juga berkecimpung langsung di dunia startup. Khusus Startup Class peserta adalah terbatas untuk para tenant binaan Binari. Para sesi startup class ini para tenant bisa bertanya dan berdiskusi langsung dengan para pemateri tentang masalah yang dihadapi mereka dalam menjalankan bisnis yang sedang dijalani.</p>
        </div>
     
        <Footer />
        </div>
    );
}

export default Laystarup;