import Navbar from '../components/NavbarComp';
import '../styles/MainPageStyle.css';
import cardImg from '../img/cardImg.jpg';
import audiImg from '../img/audi.jpeg';
import aziImg from '../img/azi.jpg';
import gymImg from '../img/Gym.png';
import codingImg from '../img/coding.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../components/FooterComp';

const MainPage = () => {
    return (
        <div>
            <Navbar />
            <div className="stack-container">
                <div className="card">
                    <h2>
                        <strong>A qoute that describe me the best</strong>
                    </h2>
                    <p className="qoute">"Creativity, skill, and passion - all in one place!"</p>
                    <p>
                        <img
                            src={cardImg}
                            alt="gang"
                            style={{ width: '250px', height: 'auto', maxHeight: '400px' }}
                        />
                    </p>
                </div>
                <div className="card"></div>
                <div className="card"></div>
            </div>
            <div className="intrest-container bg-dark">
                <h1>Interesting things about me</h1>

                <Container fluid className="me-container">
                    <Row className="d-flex flex-nowrap align-items-center mb-4">
                        <Col lg={6} className="gallery">
                            <img
                                src={audiImg}
                                alt="img1"
                                style={{ width: '300px', height: '250px' }}
                            />
                            <img
                                src={aziImg}
                                alt="img2"
                                style={{ width: '300px', height: '250px' }}
                            />
                            <img
                                src={gymImg}
                                alt="img3"
                                style={{ width: '300px', height: '250px' }}
                            />
                            <img
                                src={codingImg}
                                alt="img4"
                                style={{ width: '300px', height: '250px' }}
                            />
                        </Col>
                        <Col
                            lg={6}
                            className="d-flex flex-column justify-content-start"
                            style={{ width: '400px' }}
                        >
                            <p style={{ fontSize: '20px' }}>
                                - Last year I got my first car, so now I am driving an{' '}
                                <strong>Audi A3 '03.</strong>
                            </p>
                            <p style={{ fontSize: '20px' }}>
                                - In my free time I like to listen to music, my favourite artist is
                                <strong> Azahriah</strong>
                            </p>
                            <p style={{ fontSize: '20px' }}>
                                - I also go to the gym four times a week as I think being fit and
                                healty can <strong>boost</strong> your <strong>work moral</strong>
                            </p>
                            <p style={{ fontSize: '20px' }}>
                                - I think one of my good traits that I'm very{' '}
                                <strong>open to learn new things</strong>, that's why sometimes I
                                like to do some <strong>coding in my free time</strong> to learn
                                something new.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export default MainPage;
