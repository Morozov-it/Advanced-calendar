import { Menu, Row } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from 'routes'

const Navbar: FC = () => {
    const navigate = useNavigate()

    return (
        <Header>
            <Row justify='end'>
                <Menu style={{ width: '100px' }} selectable={false} theme="dark" mode="horizontal">
                    <Menu.Item
                        onClick={()=> navigate(RouteNames.LOGIN)}
                        key="1">Login</Menu.Item>
                </Menu>
            </Row>
        </Header>
    )
}

export default Navbar