import { Menu, Row } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from 'routes'
import { AuthActionCreators } from 'store/reducers/auth/actionCreators'



const Navbar: FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isAuth } = useTypedSelector(state => state.auth)

    return (
        <Header>
            <Row justify='end'>
                {isAuth && <span onClick={()=> navigate(RouteNames.EVENT)}
                    style={{ cursor: 'pointer', color: 'white' }}>Name</span>}
                <Menu style={{ width: '100px' }} selectable={false} theme="dark" mode="horizontal">
                    {isAuth
                        ?<Menu.Item
                            onClick={()=> dispatch(AuthActionCreators.logout())}
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