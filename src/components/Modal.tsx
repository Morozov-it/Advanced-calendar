import { Dispatch, FC, SetStateAction } from 'react';
import { Modal as AntModal } from 'antd';
import EventForm from './EventForm';
import { IEvent, IUser } from 'models';

interface ModalProps {
    visible: boolean,
    setVisible: Dispatch<SetStateAction<boolean>>,
    guests: IUser[],
    submit: (event: IEvent) => void
}

const Modal: FC<ModalProps> = ({ visible, setVisible, guests, submit }) => {

    return (
        <AntModal
            title="Add event"
            footer={null}
            onCancel={() => setVisible(false)}
            visible={visible}>
            <EventForm
                submit={submit}
                guests={guests} />
        </AntModal>
    )
}

export default Modal