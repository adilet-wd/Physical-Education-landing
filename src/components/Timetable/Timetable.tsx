import "src/styles/Timetable.scss";

interface TimetableProps {
    group: string;
}

export default function Timetable({group} : TimetableProps) {
    const schedule = {
        aco23: {
            days: 1,
            lessons: 7,
        },
        mar23a: {
            days: 0,
            lessons: 5,
        },
        mar23b: {
            days: 3,
            lessons: 1,
        },
        des23a: {
            days: 0,
            lessons: 5,
        },
        des23b: {
            days: 4,
            lessons: 1,
        },
        csc23: {
            days: 3,
            lessons: 5,
        },
        sca23a: {
            days: 2,
            lessons: 6,
        },
        sca23b: {
            days: 3,
            lessons: 7,
        },
        sca23c: {
            days: 1,
            lessons: 9,
        },
        aco22: {
            days: 3,
            lessons: 7,
        },
        mar22: {
            days: 2,
            lessons: 9,
        },
        des22: {
            days: 0,
            lessons: 3,
        },
        csc22: {
            days: 4,
            lessons: 4,
        },
        sca22a: {
            days: 3,
            lessons: 1,
        },
        sca22b: {
            days: 0,
            lessons: 9,
        },
        
    }

    return (
      <div className="table-container">
        {schedule[group as keyof typeof schedule] 
            ? <h2 className="section-title">Расписание группы <span className="timetable-group">{group}</span></h2> 
            : <h2 className="section-title">Расписание группы <span className="timetable-group">{group}</span> не найдено</h2>
        }
        <table className="timetable">
            <thead>
            <tr>
                <th>Урок</th>
                <th>Понедельник</th>
                <th>Вторник</th>
                <th>Среда</th>
                <th>Четверг</th>
                <th>Пятница</th>
            </tr>
            </thead>
            <tbody>
            {schedule[group as keyof typeof schedule]   
                ? Array(10).fill(0).map((_, i) => (
                <tr key={i}>
                    <td>{i + 1}</td>
                    {Array(5).fill(0).map((_, j) => (
                        (schedule[group as keyof typeof schedule].days === j && (schedule[group as keyof typeof schedule].lessons === i || schedule[group as keyof typeof schedule].lessons === i + 1) )
                            ? <td className="active" key={j}>Занятие</td> 
                            : <td key={j}></td>
                        ))}
                </tr>
                )) 
                : Array(10).fill(0).map((_, i) => (
                    <tr key={i}>
                        <td>{i + 1}</td>
                        {Array(5).fill(0).map((_, j) => (
                            <td key={j}></td>
                        ))}
                    </tr>
                )) 
            }
          </tbody>
      </table>
      </div>
    )
  }
