import FooterFive from "@/layout/footers/FooterFive";
import HeaderSix from "@/layout/headers/HeaderSix";
import ContactArea from "./ContactArea";
import GoogleMapArea from "./GoogleMapArea";



const Contact = () => {
    return (
        <>
            <HeaderSix />
            <main>
                <ContactArea />
                <GoogleMapArea />
            </main>
            <FooterFive style={true} />
        </>
    );
};

export default Contact;