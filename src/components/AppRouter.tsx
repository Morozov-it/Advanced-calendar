import { useTypedSelector } from 'hooks/useTypedSelector'
import { FC } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { privateRoutes, publicRoutes, RouteNames } from 'routes'



const AppRouter: FC = () => {
    const { isAuth } = useTypedSelector(state => state.auth)

    return (
        <Routes>
            {isAuth
                ?
                privateRoutes.map(route => 
                    <Route key={route.path} path={route.path} element={route.element}/>)
                :
                publicRoutes.map(route => 
                    <Route key={route.path} path={route.path} element={route.element} />)
                
            }
            <Route path="*"
                element={<Navigate to={RouteNames.LOGIN} />} />
        </Routes>
    )
}

export default AppRouter
