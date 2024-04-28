import { Container } from 'react-bootstrap';
import "src/styles/Notfoundpage.scss";

export default function Notfoundpage() {
  return (
    <div className='notFound'>
            <Container className='notFound__text'>
                <h1>404</h1>
                <p>Page not found</p>
            </Container>
        </div>
  )
}
