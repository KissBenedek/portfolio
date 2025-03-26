import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/FooterComp";
import Navbar from "../components/NavbarComp";


const Contacts = () => {
    return (
        <div className="page-container">
            <div className="content">
            <Navbar/>
            <Container fluid className="py-5"></Container>
               <Row className="text-center">
                <Col>
                <h1>Contacts</h1>
                </Col>
               </Row>
            </div>
            <Footer/>
        </div>
    )
}


export default Contacts;