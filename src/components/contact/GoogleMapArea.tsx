

import LocationIconContact from "@/svg/contact_icon/LocationIconContact";
const google_map_link = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d193502.96100813415!2d-74.1369342267891!3d40.729379535002856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1685268313256!5m2!1sen!2sbd"
 
type google_map_content_type = {
    sub_title: string;
    title: string;
    locations: {
        id: number;
        icon: JSX.Element;
        country: string;
        address: JSX.Element;
        address_link: string;
    }[];
}
 const google_map_content: google_map_content_type = {
    sub_title: "OUR OFFICES",
    title: "Visit one of our offices around the World",
    locations: [
        {
            id: 1, 
            icon: <LocationIconContact />,
            country: "United Kingdom",
            address: <>20 Great Marlborough Street, <br /> London, UK W18HU</>,
            address_link: "https://www.google.com/maps/@40.7293795,-74.1369342,11z?hl=en&entry=ttu",
        },
        {
            id: 1, 
            icon: <LocationIconContact />,
            country: "USA",
            address: <>208 Hamilton Avenue, Palo <br /> Alto, California, 901</>,
            address_link: "https://www.google.com/maps/@40.7293795,-74.1369342,11z?hl=en&entry=ttu",
        },
    ]
 }
 const {sub_title, title, locations} = google_map_content

const GoogleMapArea = () => {
    return (
        <>
            <section className="map-area map-wrapper">
                <div className="container">
                    <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="map-wrap">
                            <div className="map-content">
                                <span>{sub_title}</span>
                                <h4 className="map-title">{title}</h4>
                            </div>
                            <ul>
                                {locations.map((item, i)  => 
                                    <li key={i}>
                                        <div className="location">
                                            <div className="location-icon">
                                                <span>{item.icon}</span>
                                            </div>
                                            <div className="location-content">
                                                <h4 className="location-title">{item.country}</h4>
                                                <p><a target="_blank" href={item.address_link}>{item.address}</a></p>
                                            </div>
                                        </div>
                                    </li>                                
                                )} 
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="map-bg">
                            <iframe src={google_map_link}></iframe>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GoogleMapArea;