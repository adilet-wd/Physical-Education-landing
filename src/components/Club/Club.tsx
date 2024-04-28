import { ReactNode } from 'react';
import { Container } from 'react-bootstrap';
import "src/styles/Clubs.scss";
export default function Club(props: {children: ReactNode}) {
  return (
    <div className='club'>
        <Container className='club-container'>
            {props.children}
        </Container>
    </div>
  )
}
