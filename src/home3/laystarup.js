import Navbar from "../nav/Navbar";
import Layanan from "../home3/layanan";
import img from './../img/layanan.png';
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
            <h2>Program Inkubasi Startup</h2>
            <img src={img} alt="" />
            <p>Binari berpengalaman lebih dari 5 tahun dalam menjalankan Inkubator dan sudah menjadi anggota AIBI (Asosiasi Inkubator Bisnis Indonesia) serta calon anggota ABI-Net (ASEAN Business Incubator Network). Program yang kami tawarkan adalah :


            - Incubator Consultation
            Binari menawarkan kepada anda kerjasama untuk pembuatan inkubator di perusahaan anda, peran Inkubator penting bagi anda yang sedang melakukan pengembangan produk digital (R&D).


            - Incubation Program Consulting and Organizer
            Binari menawarkan kepada anda kerjasama dalam menjalankan program pembinaan baik pada Startup dan UMKM. Kami berpengalaman bekerjasama dengna Pemkot Cimahi serta Inkubator Enhaiipreneur dalam program pembinaan Startup.</p>
        </div>
     
        <Footer />
        </div>
    );
}

export default Laystarup;