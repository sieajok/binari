import acara from '../img/acara.jpeg';
import acara2 from '../img/acara2.jpeg';
import acara4 from '../img/acara4.png';
import acara6 from '../img/acara6.jpg';
import acara7 from '../img/acara7.jpg';
import acara8 from '../img/acara8.jpg';
import './acara.css';

export default function Acara(){
    return (
        <>
        <div className="banner-acara">
            <h2 style={{paddingTop:"200px", color:"white", fontWeight:"bold", fontSize:"50px"}}>Acara Binari</h2>
        </div>
        <div className="acara-wrapper">
            <div className="acara-container">
                <img src={acara} alt="" />
                <div className="deskripsi">
                    <h2>Binari STARTUP INCUBATOR WEB 3.0 SERIES</h2>
                    <p>Binari STARTUP INCUBATOR WEB 3.0 SERIES "NFT Sebagai Potensi Ekonomi Kreatif Baru" Ingin buat NFT tapi bingung bagaimana caranya?Bingung bagaimana membangun hype...</p>
                    <p><strong>Selengkapnya</strong></p>
                </div>
            </div>
            <div className="acara-container">
                <img src={acara2} alt="" />
                <div className="deskripsi">
                    <h2>Microsoft Dev//Verse</h2>
                    <p><strong>Selengkapnya</strong></p>
                </div>
            </div>
            <div className="acara-container">
                <img src={acara4} alt="" />
                <div className="deskripsi">
                    <h2>Microsoft Dev//Verse</h2>
                    <p><strong>Selengkapnya</strong></p>
                </div>
            </div>
            <div className="acara-container">
                <img src={acara6} alt="" />
                <div className="deskripsi">
                    <h2>Microsoft Dev//Verse</h2>
                    <p><strong>Selengkapnya</strong></p>
                </div>
            </div>
            <div className="acara-container">
                <img src={acara7} alt="" />
                <div className="deskripsi">
                    <h2>Microsoft Dev//Verse</h2>
                    <p><strong>Selengkapnya</strong></p>
                </div>
            </div>
            <div className="acara-container">
                <img src={acara8} alt="" />
                <div className="deskripsi">
                    <h2>Microsoft Dev//Verse</h2>
                    <p><strong>Selengkapnya</strong></p>
                </div>
            </div>
        </div>
        </>
    );
}