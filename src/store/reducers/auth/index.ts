import { IUser } from "models";
import { AuthAction, AuthActionType, AuthState } from "./types";


const initialState: AuthState = {
    isAuth: false,
    isLoading: false,
    error: '',
    user: {} as IUser
}

export default function authReducer(state = initialState, action: AuthAction): AuthState {
    switch (action.type) {
        case AuthActionType.SET_AUTH:
            return {
                ...state,
                isAuth: action.payload
            }
        case AuthActionType.SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case AuthActionType.SET_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        case AuthActionType.SET_USER:
            return {
                ...state,
                user: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}