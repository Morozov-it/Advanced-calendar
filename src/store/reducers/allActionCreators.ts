import { AuthActionCreators } from "./auth/actionCreators";
import { EventActionCreators } from "./event/actionCreators";


//собираются все action-creators приложения
export const allActionCreators = {
    ...AuthActionCreators,
    ...EventActionCreators
}