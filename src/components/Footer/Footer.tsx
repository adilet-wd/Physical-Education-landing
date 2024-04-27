import { Container } from "react-bootstrap";
import 'src/styles/Footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
        <Container className="footer-container">
            <span className="devider-separator"></span>
            <div className="footer__license">© Международный Университет Ала-Тоо 2024</div>
        </Container>
    </footer>
  )
}
