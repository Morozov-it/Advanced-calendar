import { AuthAction, AuthActionType, AuthState } from "./types";

const initialState: AuthState = {
    isAuth: false
}

export default function authReducer(state = initialState, action: AuthAction): AuthState {
    switch (action.type) {
        case AuthActionType.SET_AUTH:
            return {
                ...state,
                isAuth: action.payload
            }
        default:
            return state;
    }
}