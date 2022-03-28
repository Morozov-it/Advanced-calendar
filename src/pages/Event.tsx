import { Button, Layout, Row, Spin, Typography } from 'antd'
import Calendar from 'components/Calendar'
import Modal from 'components/Modal'
import { useActions } from 'hooks/useActions'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { IEvent } from 'models'
import { FC, useEffect, useState } from 'react'


const Event: FC = () => {
    const [ visible, setVisible ] = useState(false)
    const { fetchGuests, createEvent, fetchEvents } = useActions()
    const { error, isLoading, guests, events } = useTypedSelector(state => state.event)
    const { user } = useTypedSelector(state => state.auth)

    useEffect(() => {
        fetchGuests();
        fetchEvents(user.username)
    }, [])


    const submit = (event: IEvent) => {
        const userEvent = { ...event, author: user.username };
        createEvent(userEvent);
        setVisible(false);
    }

    if (isLoading) {
        return (<Spin className='spinner h100' size="large" />)
    }
    return (
        <Layout className='container'>
            {error && <Typography.Text type="danger">{error}</Typography.Text>}
            <Calendar events={events} />
            <Row justify='center'>
                <Button onClick={() => setVisible(true)}>
                    Add event
                </Button>
            </Row>
            <Modal submit={submit}
                guests={guests}
                visible={visible}
                setVisible={setVisible} />
        </Layout>
    )
}

export default Event