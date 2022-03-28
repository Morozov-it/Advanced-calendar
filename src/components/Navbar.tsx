import { Menu, Row } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import { useActions } from 'hooks/useActions'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from 'routes'



const Navbar: FC = () => {
    const { logout } = useActions()
    const navigate = useNavigate()
    const { isAuth, user } = useTypedSelector(state => state.auth)

    return (
        <Header>
            <Row justify='end'>
                {isAuth && <span onClick={()=> navigate(RouteNames.EVENT)}
                    style={{ cursor: 'pointer', color: 'white' }}>{user.username}</span>}
                <Menu style={{ width: '100px' }} selectable={false} theme="dark" mode="horizontal">
                    {isAuth
                        ?<Menu.Item
                            onClick={ ()=> logout() }
                            key="0">Exit</Menu.Item>
                        :<Menu.Item
                            onClick={()=> navigate(RouteNames.LOGIN)}
                            key="1">Login</Menu.Item>
                    }
                </Menu>
            </Row>
        </Header>
    )
}

export default Navbar