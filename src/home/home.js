import Navbar from "../nav/Navbar";
import Carousel from "../carosel/carosel";
import Text from "./text";
import Footer from "../footer/footer";

const Home = () => {
    return(
        <div>
        <Navbar />
        <Carousel />
        <Text />
        <Footer />
        </div>
    );
}

export default Home;