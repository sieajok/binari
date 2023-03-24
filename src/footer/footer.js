import './footer.css';
import logo from '../img/logo.png';

function Footer() {
    return (
        <footer>
            <div>
                <img src={logo} alt="" id='logo-footer' />
                <p>admin@binari.id</p>
            </div>
            <div className='tautan'>
                <ul>
                    <li id='jeki'>Tautan Berguna</li>
                    <li>Beranda</li>
                    <li>Tentang</li>
                    <li>Layanan</li>
                    <li>Startup</li>
                    <li>Acara</li>
                    <li>Kontak</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li id='jeki'>Hubungi Kami</li>
                    <li id='ajo'>Jl. Pelajar Pejuang 45 No, 65 Bandung</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li id='jeki'>Tentang Kami</li>
                    <li>Binari adalah Inkubator startup yang berlokasi di Bandung yang mengasuh berbagai startup berbasis teknologi menggunakan konsep "People-Process-Technology" Selengkapnya</li>
                </ul>
            </div>
        </footer>
    );
  }
  
  export default Footer;