import { Form, Input, DatePicker, Button, Row, Select } from 'antd'
import { FC, useState } from 'react'
import { rules } from 'utils/rules'
const { Option } = Select;


const EventForm: FC = () => {
    const [value, setValue] = useState('')
    
    return (
        <Form
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 10 }}>
            <Form.Item 
                label="Event description"
                name="description"
                rules={[rules.required()]}>
                <Input
                    onChange={(e) => setValue(e.target.value) }
                    value={value} />
            </Form.Item>
            <Form.Item 
                label="Guest"
                name="quest"
                rules={[rules.required()]}>
                <Select
                    onChange={()=> {}}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
            </Form.Item>
            <Form.Item 
                label="Date of event"
                name="date"
                rules={[rules.required()]}>
                <DatePicker onChange={() => {}} />
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