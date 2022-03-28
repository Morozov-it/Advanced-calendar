import { EventAction, EventActionType, EventState } from "./types"

const initialState: EventState = {
    guests: [],
    events: [],
    isLoading: false,
    error: '',
}

export default function eventReducer(state = initialState, action: EventAction): EventState {
    switch (action.type) {
        case EventActionType.SET_GUESTS:
            return {
                ...state,
                guests: action.payload,
                isLoading: false
            }
        case EventActionType.SET_EVENTS:
            return {
                ...state,
                events: action.payload,
                isLoading: false
            }
        case EventActionType.SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case EventActionType.SET_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state
    }
}