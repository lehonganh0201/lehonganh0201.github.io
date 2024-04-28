import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Testimonials from "../../components/Testimonials/Testimonials ";

const AboutUs = () =>{
    const showBanner = <div className="width-page">
        <h1>About Us</h1>
    </div>
    return (
        <>
            <Header/>
            <Banner show={showBanner} />
            <Testimonials/>
            <Footer/>
        </>
    )
}

export default AboutUs;