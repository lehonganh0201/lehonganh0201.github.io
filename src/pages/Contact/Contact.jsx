import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Contact = () =>{
    const showBanner = <div className="width-page">
        <h1>Contact Start Bootstrap</h1>
        <div className="contact-form">
            <input type="text" placeholder="Email Address"/>
            <button className="btn btn-primary">Contact</button>
        </div>
    </div>

    return (
        <>
            <Header/>
            <Banner show={showBanner}/>
            <Footer/>
        </>
    )
}

export default Contact;