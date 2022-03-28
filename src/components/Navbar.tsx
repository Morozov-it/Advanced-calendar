import { Menu, Row } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from 'routes'

const Navbar: FC = () => {
    const navigate = useNavigate()
    const { isAuth } = useTypedSelector(state => state.auth)

    return (
        <Header>
            <Row justify='end'>
                {isAuth && <span style={{ color: 'white' }}>Name</span>}
                <Menu style={{ width: '100px' }} selectable={false} theme="dark" mode="horizontal">
                    {isAuth
                        ?<Menu.Item
                            onClick={()=> console.log('log out')}
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