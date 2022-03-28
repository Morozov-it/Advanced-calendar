import { IUser } from "models/IUser"

export interface AuthState {
    isAuth: boolean,
    isLoading: boolean,
    error: string,
    user: IUser
}

export enum AuthActionType {
    SET_AUTH = 'SET_AUTH',
    SET_LOADING = 'SET_LOADING',
    SET_ERROR = 'SET_ERROR',
    SET_USER = 'SET_USER',
}

export interface SetAuthAction {
    type: AuthActionType.SET_AUTH
    payload: boolean
}
export interface SetAuthLoadingAction {
    type: AuthActionType.SET_LOADING
    payload: boolean
}
export interface SetAuthErrorAction {
    type: AuthActionType.SET_ERROR
    payload: string
}
export interface SetUserAction {
    type: AuthActionType.SET_USER
    payload: IUser
}

export type AuthAction = SetAuthAction | SetAuthLoadingAction | SetAuthErrorAction | SetUserAction