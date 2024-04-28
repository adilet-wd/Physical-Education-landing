import { ReactNode } from 'react';
import "src/styles/Clubs.scss";
export default function ClubName(props: {children: ReactNode}) {
  return (
    <span className='club__name'>
        {props.children}
    </span>
  )
}
