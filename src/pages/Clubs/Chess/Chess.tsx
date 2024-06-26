import PageTitle from "src/components/PageTitle/PageTitle";
import img1 from "src/assets/clubs/chess/chess.jpeg";
import img2 from "src/assets/clubs/chess/img2.jpeg";
import ClubText from "src/components/Club/ClubText";
import ClubName from "src/components/Club/ClubName";
import Club from "src/components/Club/Club";
import ClubImg from "src/components/Club/ClubImg";
import { Helmet } from "react-helmet";

export default function Chess() {
  return (
    <>
      <Helmet>
        <title>Шахматы - Международный университет Ала-Тоо</title>
        <meta name="description" content="Страница о шахматах" />
        <meta name="keywords" content="шахматы, спорт, командная игра" />
      </Helmet>
      <PageTitle>Шахматы</PageTitle>
      <Club>
        <ClubText><ClubName>Ша́хматы</ClubName> (перс. شاه مات ‘шах мат’, буквальный перевод «шах умер») — настольная логическая игра с шахматными фигурами на 64-клеточной доске, сочетающая в себе элементы искусства (в том числе в части шахматной композиции), науки и спорта.</ClubText>
        <ClubImg src={img1} alt="Шахматы"/>
        <ClubText>В шахматы обычно играют два игрока (именуемые шахматистами) друг против друга. Также возможна игра одной группы шахматистов против другой или против одного игрока, такие партии зачастую именуются консультационными. Кроме того, существует практика сеансов одновременной игры, когда против одного сильного игрока играет несколько противников, каждый на отдельной доске.</ClubText>
        <ClubImg src={img2} alt="Шахматы"/>
        <ClubText>Правила игры в основном сложились к XV веку; в современных официальных турнирах применяются правила Международной шахматной федерации, которыми регламентируются не только передвижение фигур, но и права судьи, правила поведения игроков и контроль времени. Игра, осуществляемая дистанционно — например, по переписке, по телефону или через Интернет — имеет особые правила. Существует множество вариантов шахмат, отличающихся от классических: с нестандартными правилами, фигурами, размерами доски и т. п. Соответствующий раздел шахматной композиции — сказочные шахматы. Некоторые аспекты шахматной игры изучаются в математике (например, классические «Задача о ходе коня» и «Задача о восьми ферзях»), в том числе при помощи компьютерного моделирования.</ClubText>
      </Club>
    </>
  )
}
