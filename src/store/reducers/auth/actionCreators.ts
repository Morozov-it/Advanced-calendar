import UserService from "api/UserService";
import { IUser } from "models";
import { AppDispatch } from "store";
import { AuthActionType, SetAuthAction, SetAuthErrorAction, SetAuthLoadingAction, SetUserAction } from "./types";


export const AuthActionCreators = {

    //синхронные
    setUser: (user: IUser): SetUserAction => ({
        type: AuthActionType.SET_USER,
        payload: user
    }),
    setIsAuth: (auth: boolean): SetAuthAction => ({
        type: AuthActionType.SET_AUTH,
        payload: auth
    }),
    setAuthIsloading: (loading: boolean): SetAuthLoadingAction => ({
        type: AuthActionType.SET_LOADING,
        payload: loading
    }),
    setAuthError: (error: string): SetAuthErrorAction => ({
        type: AuthActionType.SET_ERROR,
        payload: error
    }),

    //асинхронные
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setAuthError(''))
            dispatch(AuthActionCreators.setAuthIsloading(true));
            setTimeout(async () => {
                const response = await UserService.getUsers();
                const user = response.data.find(user =>
                    user.username === username && user.password === password);
                if (user) {
                    localStorage.setItem('username', user.username);
                    localStorage.setItem('auth', 'true');
                    dispatch(AuthActionCreators.setUser(user));
                    dispatch(AuthActionCreators.setIsAuth(true));
                } else {
                    dispatch(AuthActionCreators.setAuthError('Incorrect name or password'))
                }
                dispatch(AuthActionCreators.setAuthIsloading(false));
            }, 1000)
        } catch (e: any) {
            dispatch(AuthActionCreators.setAuthError('Server login error'))
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem('username');
        localStorage.removeItem('auth');
        dispatch(AuthActionCreators.setIsAuth(false));
        dispatch(AuthActionCreators.setUser({} as IUser));
    }
}