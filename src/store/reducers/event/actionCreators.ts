import UserService from "api/UserService";
import { IEvent, IUser } from "models";
import { AppDispatch } from "store";
import { EventActionType, SetEventErrorAction, SetEventLoadingAction, SetEventsAction, SetGuestAction } from "./types";


export const EventActionCreators = {
    //синхронные
    setGuests: (payload: IUser[]): SetGuestAction => ({
        type: EventActionType.SET_GUESTS,
        payload
    }),
    setEvents: (payload: IEvent[]): SetEventsAction => ({
        type: EventActionType.SET_EVENTS,
        payload
    }),
    setEventIsloading: (payload: boolean): SetEventLoadingAction => ({
        type: EventActionType.SET_LOADING,
        payload
    }),
    setEventError: (payload: string): SetEventErrorAction => ({
        type: EventActionType.SET_ERROR,
        payload
    }),

    //асинхронные
    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(EventActionCreators.setEventError(''));
            dispatch(EventActionCreators.setEventIsloading(true));
            setTimeout( async() => {
                const response = await UserService.getUsers();
                dispatch(EventActionCreators.setGuests(response.data))
            }, 1000)
        } catch (e: any) {
            dispatch(EventActionCreators.setEventError('error fetching guests'))
        }
    },
    fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(EventActionCreators.setEventError(''));
            dispatch(EventActionCreators.setEventIsloading(true));
            setTimeout(() => {
                const events = localStorage.getItem('events') || '[]';
                const json = JSON.parse(events) as IEvent[];
                const currentUserEvent = json.filter(event => event.author === username || event.guest === username)
                dispatch(EventActionCreators.setEvents(currentUserEvent));
            }, 1000)
        } catch (e: any) {
            dispatch(EventActionCreators.setEventError('error fetching guests'))
        }
    },
    createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem('events') || '[]';
            const json = JSON.parse(events) as IEvent[];
            json.push(event);
            dispatch(EventActionCreators.setEvents(json));
            localStorage.setItem('events', JSON.stringify(json))
        } catch (e: any) {
            dispatch(EventActionCreators.setEventError('error creating event'))
        }
    }
}