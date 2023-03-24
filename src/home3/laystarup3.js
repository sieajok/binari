import Navbar from "../nav/Navbar";
import Layanan from "../home3/layanan";
import img1 from './../img/layanan4.jpg';
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
            <h2>Lab Penelitian</h2>
            <img src={img1} alt="" width='500px' />
            <p>Binari memiliki coworking space yang beralamat di Jalan Naripan No.53 Bandung. Workspace53 memiliki fasilitas yang cukup lengkap seperti ruang meeting, virtual office, meja kerja untuk tim ataupun untuk individual, ruang kantor, serta dapat digunakan untuk menyelenggarakan public event. Untuk info lebih lengkap bisa mengunjungi Workspace53.com.</p>
        </div>
     
        <Footer />
        </div>
    );
}

export default Laystarup;