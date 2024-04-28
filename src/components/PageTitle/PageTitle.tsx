import { ReactNode } from 'react';
import { Container } from 'react-bootstrap';
import 'src/styles/PageTitle.scss';

export default function PageTitle(props: {children: ReactNode}) {
  return (
    <div className='page__title'>
        <Container>
            <h1>{props.children}</h1>
        </Container>
    </div>
  )
}
