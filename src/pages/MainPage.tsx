import NavbarComp from '../components/NavbarComp';
import '../styles/MainPageStyle.css';
import cardImg from '../img/cardImg.jpg';
import audiImg from '../img/audi.jpeg';
import aziImg from '../img/azi.jpg';
import gymImg from '../img/Gym.png';
import codingImg from '../img/coding.jpg';

const MainPage = () => {
    return (
        <div>
            <NavbarComp />
            <div className="stack-container">
                <div className="card">
                    <h2>
                        <strong>A qoute that describe me the best</strong>
                    </h2>
                    <p className="qoute">"Creativity, skill, and passion - all in one place!"</p>
                    <p>
                        <img src={cardImg} alt="gang" style={{ width: '250px', height: '250px' }} />
                    </p>
                </div>
                <div className="card"></div>
                <div className="card"></div>
            </div>
            <div className="intrest-container bg-dark">
                <h1>Interesting things about me</h1>

                <div className="me-container">
                    <div className="gallery">
                        <img src={audiImg} alt="img1" style={{ width: '300px', height: '250px' }} />
                        <img src={aziImg} alt="img2" style={{ width: '300px', height: '250px' }} />
                        <img src={gymImg} alt="img3" style={{ width: '300px', height: '250px' }} />
                        <img
                            src={codingImg}
                            alt="img4"
                            style={{ width: '300px', height: '250px' }}
                        />
                    </div>
                    <div className="d-flex justify-content-end">gang</div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
