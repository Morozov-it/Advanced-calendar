import { AuthActionCreators } from "./auth/actionCreators";

//собираются все action-creators приложения
export const allActionCreators = {
    ...AuthActionCreators,
}