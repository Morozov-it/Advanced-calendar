import { Form, Input, DatePicker, Button, Row, Select } from 'antd'
import { IEvent, IUser } from 'models';
import { Moment } from 'moment';
import { FC, useState } from 'react'
import { formatDate } from 'utils/date';
import { rules } from 'utils/rules'
const { Option } = Select;


interface EventFormProps {
    guests: IUser[],
    submit: (event: IEvent) => void
}

const EventForm: FC<EventFormProps> = ({ guests, submit }) => {

    const [ event, setEvent ] = useState<IEvent>({
        author: '',
        guest: '',
        date: '',
        description: ''
    } as IEvent)
    
    const inputHandler = (name: string, value: string) => {
        setEvent((prev) => ({
            ...prev,
            [name]: value
        }))
    }  

    const selectDate = (date: Moment | null) => {
        if (date) {
            return formatDate(date?.toDate())
        } else {
            return ''
        }
    }

    const submitForm = () => {
        submit(event)
    }

    return (
        <Form
            onFinish={submitForm}
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 10 }}>
            <Form.Item 
                label="Event description"
                rules={[rules.required()]}>
                <Input
                    name="description"
                    onChange={(e) =>
                        inputHandler(e.target.name, e.target.value)}
                    value={event.description} />
            </Form.Item>
            <Form.Item 
                label="Guest"
                rules={[rules.required()]}>
                <Select
                    onChange={(guest: string) =>
                        inputHandler('guest', guest)}>
                    {guests.map(guest =>
                        <Option
                            key={guest.username}
                            value={guest.username}>
                            {guest.username}</Option>
                    )}
                </Select>
            </Form.Item>
            <Form.Item 
                label="Date of event"
                rules={[rules.required()]}>
                <DatePicker
                    onChange={(date: Moment | null) => {
                        const selected = selectDate(date);
                        inputHandler('date', selected)
                    }} />
            </Form.Item>
            <Row justify='end'>
                <Form.Item>
                    <Button
                        //loading={ }
                        type="primary"
                        htmlType="submit">
                        Create
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    )
}

export default EventForm