import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import "src/styles/AboutUs.scss";
import PageTitle from "src/components/PageTitle/PageTitle";
import TeacherCard from "src/components/TeacherCard/TeacherCard";
import img1 from "src/assets/staff/staff.png";

export default function AboutUs() {
  return (
    <>
        <Helmet>
            <title>Наши преподаватели - Международный университет Ала-Тоо</title>
            <meta name="description" content="Преподавательский состав по физической культуре" />
            <meta name="keywords" content="преподавательский состав, физ. культура, физическая культура, МУА, Ала-Тоо" />
        </Helmet>
        <PageTitle>Преподавательский состав</PageTitle>
        <div className="about-us">
          <Container className="about-us-container">
            <div className="about-us__cards">
              <TeacherCard src={img1} alt="преподаватель">Имя фамилия</TeacherCard>
              <TeacherCard src={img1} alt="преподаватель">Имя фамилия</TeacherCard>
              <TeacherCard src={img1} alt="преподаватель">Имя фамилия</TeacherCard>
              <TeacherCard src={img1} alt="преподаватель">Имя фамилия</TeacherCard>
              <TeacherCard src={img1} alt="преподаватель">Имя фамилия</TeacherCard>
            </div>
          </Container>
        </div>
    </>
  )
}
