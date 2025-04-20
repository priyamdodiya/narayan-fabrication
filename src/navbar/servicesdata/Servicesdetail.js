import { useParams } from "react-router-dom";
import servicesData from "./ServicesData";
import "./ServiceDetail.css";
import Contact from "../../components/contact/Contact";


function ServiceDetail() {
    const { id } = useParams();
    const service = servicesData.find((s) => s.id === parseInt(id));

    if (!service) return <h2>Service Not Found</h2>;

    return (
        <div>
            <div className="service-detail">
                <img src={service.image} alt={service.title} className="service-image" />
                <div className="service-content">
                    <h2 className="service-title">{service.title}</h2>
                    <p className="service-description">{service.description}</p>
                    <div className="service-long-description">
                        {service.longDescription.split("\n\n").map((para, index) => (
                            <p key={index}>{para}</p>
                        ))}
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    );
}

export default ServiceDetail;
