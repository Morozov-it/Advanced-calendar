import axios from "axios";
import { IUser } from "models/IUser";
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
    setIsloading: (loading: boolean): SetAuthLoadingAction => ({
        type: AuthActionType.SET_LOADING,
        payload: loading
    }),
    setError: (error: string): SetAuthErrorAction => ({
        type: AuthActionType.SET_ERROR,
        payload: error
    }),

    //асинхронные
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setError(''))
            dispatch(AuthActionCreators.setIsloading(true));
            setTimeout(async () => {
                const response = await axios.get<IUser[]>('./users.json');
                const user = response.data.find(user =>
                    user.username === username && user.password === password);
                if (user) {
                    localStorage.setItem('username', user.username);
                    localStorage.setItem('auth', 'true');
                    dispatch(AuthActionCreators.setIsAuth(true));
                    dispatch(AuthActionCreators.setUser(user));
                } else {
                    dispatch(AuthActionCreators.setError('Incorrect name or password'))
                }
                dispatch(AuthActionCreators.setIsloading(false));
            }, 1000)
        } catch (e: any) {
            dispatch(AuthActionCreators.setError('Server login error'))
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem('username');
        localStorage.removeItem('auth');
        dispatch(AuthActionCreators.setIsAuth(false));
        dispatch(AuthActionCreators.setUser({} as IUser));
    }
}