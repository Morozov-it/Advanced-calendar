import { FC } from 'react'
import { Calendar as AntCalendar } from 'antd';
import { IEvent } from 'models';

interface CalendarProps {
    events: IEvent[]
}

const Calendar: FC<CalendarProps> = ({ events }) => {
    return (
        <AntCalendar />
    )
}

export default Calendar