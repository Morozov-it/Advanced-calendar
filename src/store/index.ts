import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";


const rootReducer = combineReducers({

});

export const store = createStore(rootReducer, applyMiddleware(thunk));


//на экспорт тип получаемого состояния
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;