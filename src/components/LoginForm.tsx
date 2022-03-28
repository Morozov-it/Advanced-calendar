import { Button, Form, Input, Typography } from 'antd';
import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { FC, useState } from 'react';
import { rules } from 'utils/rules';



const LoginForm: FC = () => {
    const { login } = useActions()
    const { error, isLoading } = useTypedSelector(state => state.auth)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submit = () => {
        login(username, password)
    }

    return (
        <Form
            onFinish={submit}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            autoComplete="off">
            <Form.Item
                label="Username"
                name="username"
                rules={[rules.required('Please input your username!')]}>
                <Input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value) }
                    value={username} />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[rules.required('Please input your password!')]}>
                <Input.Password
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value) }
                    value={password} />
            </Form.Item>

            {error && <Typography.Text type="danger">{error}</Typography.Text>}

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Log in
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm