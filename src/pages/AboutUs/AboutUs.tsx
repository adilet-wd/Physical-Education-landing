import { Helmet } from "react-helmet";
import PageTitle from "src/components/PageTitle/PageTitle";

export default function AboutUs() {
  return (
    <>
        <Helmet>
            <title>Наши преподаватели - Международный университет Ала-Тоо</title>
            <meta name="description" content="Преподавательский состав по физической культуре" />
            <meta name="keywords" content="преподавательский состав, физ. культура, физическая культура, МУА, Ала-Тоо" />
        </Helmet>
        <PageTitle>Преподавательский состав</PageTitle>
    </>
  )
}
