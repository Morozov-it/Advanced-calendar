import { Dispatch, FC, SetStateAction } from 'react';
import { Modal as AntModal, Button, Layout } from 'antd';
import EventForm from './EventForm';

interface ModalProps {
    visible: boolean,
    setVisible: Dispatch<SetStateAction<boolean>>
}

const Modal: FC<ModalProps> = ({ visible, setVisible }) => {

    return (
        <AntModal
            title="Add event"
            footer={null}
            onCancel={() => setVisible(false)}
            visible={visible}>
            <EventForm />
        </AntModal>
    )
}

export default Modal