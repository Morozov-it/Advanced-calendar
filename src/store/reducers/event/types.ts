import { IEvent, IUser } from "models";


export interface EventState {
    guests: IUser[],
    events: IEvent[],
    isLoading: boolean,
    error: string,
}

export enum EventActionType {
    SET_GUESTS = 'SET_GUESTS',
    SET_EVENTS = 'SET_EVENTS',
    SET_LOADING = 'SET_LOADING',
    SET_ERROR = 'SET_ERROR',
}

export interface SetGuestAction {
    type: EventActionType.SET_GUESTS
    payload: IUser[]
}
export interface SetEventsAction {
    type: EventActionType.SET_EVENTS
    payload: IEvent[]
}
export interface SetEventLoadingAction {
    type: EventActionType.SET_LOADING
    payload: boolean
}
export interface SetEventErrorAction {
    type: EventActionType.SET_ERROR
    payload: string
}

export type EventAction = SetGuestAction | SetEventsAction | SetEventLoadingAction |SetEventErrorAction