import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../components/FooterComp';
import Navbar from '../components/NavbarComp';
import lavernaImg from '../img/laverna.jpg';
import '../styles/AchievementsPage.css';
import englishImg from '../img/english.jpeg';
import pizzaImg from '../img/pizza.jpg';

const AchievementsPage = () => {
    return (
        <div>
            <Navbar />
            <Container fluid className="flex-grow-1 py-5">
                <Row className="justify-content-center text-center mb-5">
                    <Col md={8}>
                        <h1 className="display-5 fw-bold mt-4">Achievements</h1>
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center text-center mb-5">
                    <Col md={8}>
                        <img src={lavernaImg} alt="Laverna" className="lavernaImg mb-3" />
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center text-center mb-5">
                    <Col md={8} lg={3}>
                        <p className="laverna-p">
                            One of my biggest achievement, the web page for{' '}
                            <a href="https://www.lavernastore.hu/" target="_blank">
                                Laverna Store
                            </a>
                            . I made it when I was 11th grader.
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center text-center mb-5">
                    <Col md={8}>
                        <img src={englishImg} alt="English" className="lavernaImg mb-3" />
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center text-center mb-5">
                    <Col md={8} lg={3}>
                        <p className="laverna-p">
                            I also reached an honorable place on the National English Competetion
                            arranged by IBS
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center text-center mb-5">
                    <Col md={8}>
                        <img src={pizzaImg} alt="Pizza" className="pizzaImg mb-3" />
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center text-center mb-5">
                    <Col md={8} lg={3}>
                        <p className="laverna-p">
                            And a quite recent one was a pizzashop webpage. This webpage include
                            options for the admin to create, modify and delete. You can also login
                            and have a profile, and many other useful function.{' '}
                        </p>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default AchievementsPage;
