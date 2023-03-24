import './text.css';
import img1 from './../img/A.PNG'
import img2 from './../img/B.PNG'
import img3 from './../img/C.PNG'
import img4 from './../img/D.PNG'

function Text() {
    return (
        <center>
        <div className='joe'>
            <div className='do'>
            <h1>Binari Jalan Bisnis Anda</h1>
            <h4>"Menyediakan Jalan Yang luas Bagi Bisnis Anda"</h4>
            <h4>Bergabunglah Bersama Kami Untuk Evolusi, Buat Perubahan untuk Indonesia, Kembangkan Generasi Pengusaha, dan Buat Dunia yang Lebih Baik.</h4>
            </div>
        

        <div className="card-do">
        <div className="img">
        <img src={img1} />
        <h5 className='h5'>Program Inkubator Bisnis</h5>
        <h4 className='huu'>PRODUCT ACCELERATOR</h4>
        </div>
        <div className="img">
        <img src={img2} />
        <h5 className='h5'>Program Edukasi Intensif</h5>
        <h4 className='huu'>FOUNDER BOOTCAMP</h4>
        </div>
        <div className="img">
        <img src={img3} />
        <h5 className='h5'>Jaringan Investor</h5>
        <h4 className='huu'>DIGITAL MARKETING</h4>
        </div>
        <div className="img">
        <img src={img4} />
        <h5 className='h5'>Manajemen Keuangan</h5>
        <h4 className='huu'>FINANCE & TAX</h4>
        </div>
        </div>
</div>
        <div className='pada'>
            <h2 className='wkwk'style={{paddingTop:"100px", color:"white", fontWeight:"bold"}}>TUMBUH KEMBANG DENGAN BERKOLABORASI, BELAJAR, DAN MENDAPATKAN AKSES KE JARINGAN STRATEGIS BINARI!</h2>
            <p>Jadilah bagian dari Binari dan skalakan bisnis Anda dengan sukses!</p>
        </div>
</center>



      
    );
  }
  
  export default Text;
  