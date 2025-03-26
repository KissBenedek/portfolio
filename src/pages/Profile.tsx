import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../components/NavbarComp';
import Footer from '../components/FooterComp';
import profileImg from '../img/image(45).png';

const ProfilePage = () => {
    return (
        <div>
            <Navbar />
            <div>
                <Container fluid className="flex-grow-1 py-5">
                    <Row className="justify-content-center text-center mb-4">
                        <Col md={8}>
                            <h1 className="display-5 fw-bold mt-4">About me</h1>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={6} lg={6}>
                            <img
                                src={profileImg}
                                alt="handsomeFellow"
                                style={{ width: '200px', height: '300px' }}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export default ProfilePage;
