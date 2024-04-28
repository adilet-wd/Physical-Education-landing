/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode } from 'react';
import { Card } from 'react-bootstrap';

interface CardProps {
    src: string;
    alt?: string;
    children: ReactNode;
}


export default function TeacherCard({children, src, alt = ''}: CardProps) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={src} alt={alt}/>
      <Card.Body>
        <Card.Title>{children}</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, tempora.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
