import Club from "src/components/Club/Club";
import ClubText from "src/components/Club/ClubText";
import PageTitle from "src/components/PageTitle/PageTitle";
import img1 from "src/assets/clubs/volleyball/volleyball.jpeg";
import img2 from "src/assets/clubs/volleyball/img2.jpeg";
import ClubImg from "src/components/Club/ClubImg";
import ClubName from "src/components/Club/ClubName";
import { Helmet } from 'react-helmet';

export default function Volleyball() {
  return (
    <>     
        <Helmet>
            <title>Волейбол - Международный университет Ала-Тоо</title>
            <meta name="description" content="Страница о волейболе" />
            <meta name="keywords" content="волейбол, спорт, командная игра" />
        </Helmet>
        <PageTitle>Волейбол</PageTitle>
        <Club>
            <ClubText><ClubName>Волейбо́л</ClubName> (англ. volleyball от volley — «удар с лёту» и ball — «мяч») — вид спорта, командная спортивная игра, в процессе которой две команды соревнуются на специальной площадке, разделённой сеткой, стремясь направить мяч на сторону соперника таким образом, чтобы он приземлился на площадке противника (добить до пола), либо чтобы игрок защищающейся команды допустил ошибку. При этом для организации атаки игрокам одной команды разрешается не более трёх касаний мяча подряд (в дополнение к касанию на блоке).</ClubText>
            <ClubImg src={img1} alt="Волейбол" />
            <ClubText><ClubName>Волейбо́л</ClubName> — неконтактный, комбинационный вид спорта, где каждый игрок имеет строгую специализацию на площадке. Важнейшими качествами для игроков в волейбол являются прыгучесть для возможности высоко подняться над сеткой, реакция, координация, физическая сила для эффективного произведения атакующих ударов.</ClubText>
            <ClubImg src={img2} alt="Волейбол" />
        </Club>
    </>
  )
}
