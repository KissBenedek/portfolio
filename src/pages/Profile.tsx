import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../components/NavbarComp';
import Footer from '../components/FooterComp';
import profileImg from '../img/image(45).png';
import '../styles/ProfilePage.css';

const ProfilePage = () => {
    return (
        <div>
            <Navbar />
            <Container fluid className="flex-grow-1 py-5">
                <Row className="justify-content-center text-center mb-5">
                    <Col md={8}>
                        <h1 className="display-5 fw-bold mt-4">About Me</h1>
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center text-center mb-5">
                    <Col md={4}>
                        <img src={profileImg} alt="Profile" className="profileImg mb-3" />
                        <h2 className="my-name">Kiss Benedek</h2>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-5">
                    <Col md={10} lg={8} className="mb-4 text-center" style={{ maxWidth: '500px' }}>
                        <h3 className="mb-3">Profile</h3>
                        <p>
                            Highly motivated and analytical software developer with expertise in C#,
                            web development, and a passion for creating efficient, user-friendly
                            solutions. Recently graduated with a degree in programming from SZTE.
                            Strong problem-solving abilities with a proven track record in academic
                            projects and internships.
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-5">
                    <Col md={8} lg={6} className="mb-4">
                        <h2 className="text-center">Education</h2>
                        <hr className="mb-3 mx-auto" style={{ width: '250px' }} />
                        <ul className="list-unstyled text-center">
                            <li>
                                <strong>
                                    University of Szeged Faculty of Science and Informatics
                                </strong>
                            </li>
                            <li>2025-2028</li>
                            <li>
                                <strong>Graduated with Honors</strong>
                            </li>
                            <li>8th place in the National Coding Competition</li>
                            <li>Highly acknowledged research in databases</li>
                        </ul>
                        <br />
                        <ul className="list-unstyled text-center">
                            <li>
                                <strong>
                                    Szeged Vasvári Pál Secondary Technical School of Economics and
                                    IT
                                </strong>
                            </li>
                            <li>2019-2025</li>
                            <li>End of term average in grade 12: 4.51</li>
                            <li>Perfect score in both history and literature verbal exams</li>
                            <li>High score in the English advanced graduation exam</li>
                        </ul>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-5">
                    <Col md={8} lg={6} className="mb-4">
                        <h3 className="text-center mb-3">Hobbies</h3>
                        <ul className="text-center list-unstyled">
                            <li>🏋️‍♂️ Going to the gym</li>
                            <li>🎮 Gaming</li>
                            <li>💻 Coding</li>
                            <li>⚽ Playing Football</li>
                        </ul>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-5">
                    <Col md={10} lg={8} className="mb-4 text-center" style={{ maxWidth: '500px' }}>
                        <h2>Work Experience</h2>
                        <hr className="mb-3 mx-auto" style={{ width: '250px' }} />
                        <ul className="list-unstyled">
                            <li>
                                <strong>
                                    Laverna-Ép Kft, Social Media Manager and Web Developer
                                </strong>
                            </li>
                            <li>2023–Present</li>
                            <li>
                                Responsibilities include creating promotional videos for TikTok and
                                other social platforms, as well as developing and managing the
                                company webpage.
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default ProfilePage;
