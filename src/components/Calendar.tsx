import { FC } from 'react'
import { Badge, Calendar as AntCalendar } from 'antd';
import { IEvent } from 'models';
import { Moment } from 'moment';
import { formatDate } from 'utils/date';

interface CalendarProps {
    events: IEvent[]
}

const Calendar: FC<CalendarProps> = ({ events }) => {

    function dateCellRender(value: Moment) {
        const formatedDate = formatDate(value.toDate())
        const currentDayEvent = events.filter(event => 
            event.date === formatedDate
        )

        return (
            <ul className="events">
                {currentDayEvent.map(item => (
                <li key={item.description}>
                    <Badge text={item.description} />
                </li>
                ))}
            </ul>
        );
    }
    

    return (
        <AntCalendar dateCellRender={dateCellRender}/>
    )
}

export default Calendar