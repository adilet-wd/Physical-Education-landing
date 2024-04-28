import { useEffect, useState } from "react";
import { Container, Dropdown } from "react-bootstrap";
import { Helmet } from "react-helmet";
import PageTitle from "src/components/PageTitle/PageTitle";
import Timetable from "src/components/Timetable/Timetable";
import "src/styles/Schedule.scss";

export default function Schedule() {
    const [group, setGroup] = useState("");
    useEffect(() => {}
    , [group]);
    function handleGroupChange(group: string) {
        setGroup(group);
        console.log(group);
    }
    return (
        <>
            <Helmet>
                <title>Расписание занятий - Международный университет Ала-Тоо</title>
                <meta name="description" content="Расписание занятий по физической культуре" />
                <meta name="keywords" content="расписание, физ. культура, физическая культура, МУА, Ала-Тоо" />
            </Helmet>
            <PageTitle>Расписание</PageTitle>
            <div className="schedule">
                <Container className="schedule-container">
                    <Dropdown>
                        <Dropdown.Toggle variant="purple" id="dropdown-basic">
                            Выберите группу
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handleGroupChange("aco23")}>Aco-23</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleGroupChange("mar23a")}>Mar-23A</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleGroupChange("mar23b")}>Mar-23B</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleGroupChange("des23a")}>Des-23A</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleGroupChange("des23b")}>Des-23B</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleGroupChange("csc23")}>Csc-23</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleGroupChange("sca23a")}>Sca-23A</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleGroupChange("sca23b")}>Sca-23B</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleGroupChange("sca23c")}>Sca-23C</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleGroupChange("aco22")}>Aco-22</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleGroupChange("mar22")}>Mar-22</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleGroupChange("des22")}>Des-22</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleGroupChange("csc22")}>Csc-22</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleGroupChange("sca22a")}>Sca-22A</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleGroupChange("sca22b")}>Sca-22B</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Timetable group={group}></Timetable>
                </Container>
            </div>
        </>
        
        )
}
