import NavbarComp from '../components/NavbarComp';
import '../styles/MainPageStyle.css';
import cardImg from '../img/cardImg.jpg';

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
        </div>
    );
};

export default MainPage;
