import { Card, CardHeader, Col, Container, ListGroup, Row } from 'react-bootstrap';
import Footer from '../components/FooterComp';
import Navbar from '../components/NavbarComp';

const Contacts = () => {
    return (
        <div className="d-flex flex-column min-vh-100 text-dark">
            <Navbar />
            <Container className="flex-grow-1 py-5">
                <Row className="justify-content-center text-center mb-4">
                    <Col md={8}>
                        <h1 className="display-5 fw-bold mt-4">Contacts</h1>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={6} lg={4}>
                        <div className="bg-dark text-white shadow-lg rounded-3 p-4">
                            <div className="bg-secondary text-center py-3 h5 rounded-top">
                                Contacts
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-dark text-white border-secondary">
                                    -{' '}
                                    <a
                                        href="https://www.facebook.com/beni.kiss.9406/"
                                        className="text-info text-decoration-none"
                                    >
                                        Facebook
                                    </a>
                                </li>
                                <li className="list-group-item bg-dark text-white border-secondary">
                                    - 06 20 267 6972
                                </li>
                                <li className="list-group-item bg-dark text-white border-secondary">
                                    -{' '}
                                    <a
                                        href="mailto:benedekk47@gmail.com"
                                        className="text-info text-decoration-none"
                                    >
                                        benedekk47@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Contacts;
