import axios from "axios";
import { EventDTO } from "../models/EventModels";
const url = import.meta.env.VITE_API_STRING + 'event';
const config = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('Bearer')}`,
        "Content-Type": "application/json"
    },
}
const closeEvent={
    closeEvent : true
}
export const getOneEvent = async (eventId: number): Promise<EventDTO>=> {
    try {
        const response = await axios.get(`${url}/${eventId}`, config);
        return response.data;
    } catch (error : any) {
        if (error.response.status === 401) {
            const emptyEvent = {
                id : 0,
                createdAt : new Date(0),
                active:false
            }
            return emptyEvent;
        }
        else{
            throw error;
        }
        
    }
}

export const getEvents = async (): Promise<EventDTO[]> => {
    try {
        const response = await axios.get(url, config);
        return response.data;
    } catch (error : any) {
        if (error.response.status === 401) {
            throw new Error("Unauthorized");
        }
        else{
            throw error;
        }
        
    }
}
export const createEvent = async (): Promise<EventDTO> => {
    return (await axios.post(url,{},config)).data as EventDTO;
}

export const activateEvent = async (eventId: number) => {
    return (await axios.get(`${url}/${eventId}/activate`)).data as EventDTO
}

export const stopEvent = async (eventId: number) => {
    return (await axios.patch(`${url}/${eventId}/`, closeEvent, config)).data as EventDTO
}
export const removeEvent = async (eventId: number) => {
    return (await axios.delete(`${url}/${eventId}/`, config)).data as EventDTO
}