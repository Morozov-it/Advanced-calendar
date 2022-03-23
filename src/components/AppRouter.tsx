import { FC } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { privateRoutes, publicRoutes, RouteNames } from 'routes'



const AppRouter: FC = () => {
    const auth = false

    return (
        <Routes>
            {auth
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
