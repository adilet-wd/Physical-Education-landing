import "src/styles/Clubs.scss";

interface ClubImgProps {
    src: string;
    alt?: string;
  }

export default function Club({src, alt = ''}: ClubImgProps) {
  return (
    <div className="club__img">
            <img src={src} alt={alt} />
    </div>
  )
}
