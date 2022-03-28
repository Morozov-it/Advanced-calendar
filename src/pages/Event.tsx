import { Button, Layout, Row } from 'antd'
import Calendar from 'components/Calendar'
import Modal from 'components/Modal'
import { FC, useState } from 'react'


const Event: FC = () => {
    const [visible, setVisible] = useState(false)

    return (
        <Layout className='container'>
            <Calendar events={[]} />
            <Row justify='center'>
                <Button onClick={() => setVisible(true)}>
                    Add event
                </Button>
            </Row>
            <Modal visible={visible} setVisible={setVisible}/>
        </Layout>
    )
}

export default Event