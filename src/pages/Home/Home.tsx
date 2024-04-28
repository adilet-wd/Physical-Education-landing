import { Container } from "react-bootstrap";
import "src/styles/Home.scss";
import basketball from "src/assets/clubs/basketball/basketball.jpeg";
import volleyball from "src/assets/clubs/volleyball/volleyball.jpeg";
import chess from "src/assets/clubs/chess/chess.jpeg";
import football from "src/assets/clubs/football/football.jpeg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
        <div className="home__background-img">
            <Container className="background-container">
                <h2>Международный университет Ала-Тоо</h2>
                <h1>Факультет физической культуры</h1>
            </Container>
        </div>
        <Container className="home-container">
            <h2 className="section-title">Клубы</h2>
            <div className="home__clubs">
                <Link to="/clubs/basketball" className="clubs__item">
                    <div className="clubs__img"><img src={basketball} alt="basketball"></img></div>
                    <div className="clubs__title">Баскетбол</div>
                </Link>
                <Link to="/clubs/volleyball" className="clubs__item">
                    <div className="clubs__img"><img src={volleyball} alt="volleyball"></img></div>
                    <div className="clubs__title">Волейбол</div>
                </Link>
                <Link to="/clubs/chess" className="clubs__item">
                    <div className="clubs__img"><img src={chess} alt="chess"></img></div>
                    <div className="clubs__title">Шахматы</div>
                </Link>
                <Link to="/clubs/football" className="clubs__item">
                    <div className="clubs__img"><img src={football} alt="football"></img></div>
                    <div className="clubs__title">Футбол</div>
                </Link>
            </div>
        </Container>
    </div>
  )
}
