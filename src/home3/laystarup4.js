import Navbar from "../nav/Navbar";
import Layanan from "../home3/layanan";
import img1 from './../img/layanan5.png';
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
            <h2>Workspace</h2>
            <img src={img1} alt="" width='500px' />
            <p>Binari menawarkan jasa Event Consultant dan Organizer. Binari sudah berpengalaman dalam menyelenggarakan event bertema startup, dan juga berpengalaman dalam menjalin kerjasama dengan organisasi pemerintah maupun swasta dalam mengadakan event. Beberapa event yang pernah Binari adakan diantaranya adalah :


- Ideology Boothcamp 2018
- Seminar Bisnis dan Investasi "Start Small, Grow Bigger"
- Business Matching "Get Ready to Boost Your Startup"
- Bandung Investment Night 2018
- Startup Class 2019 "How to be profitable and sustainable Startup"
- Startup Talk 2019 "Road to industry 4.0"</p>
        </div>
     
        <Footer />
        </div>
    );
}

export default Laystarup;