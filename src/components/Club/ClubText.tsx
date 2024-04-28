import { ReactNode } from 'react';
import "src/styles/Clubs.scss";
export default function ClubText(props: {children: ReactNode}) {
  return (
    <p className='club__text'>
        {props.children}
    </p>
  )
}
