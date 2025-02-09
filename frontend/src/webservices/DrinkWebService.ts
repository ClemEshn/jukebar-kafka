import axios, { AxiosResponse } from "axios";
import { CreateDrinkDTO, DrinkDTO } from "../models/DrinkModels";

const url = import.meta.env.VITE_API_STRING + 'drink';
const config = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('Bearer')}`
    }
}

export const createDrink = async(newDrink: CreateDrinkDTO): Promise<DrinkDTO> =>  {
    return (await axios.post(url, newDrink, config)).data as DrinkDTO;
}

export const getAllDrinks = async() : Promise<DrinkDTO[]> => {
    return (await axios.get(url, config)).data as DrinkDTO[];
}

export const deleteOneDrink = async (drinkId: number): Promise<AxiosResponse> => {
    return await axios.delete(`${url}/${drinkId}`, config);
}

export const updateDrink = async (drink: CreateDrinkDTO, drinkId: number): Promise<DrinkDTO> => {
    return (await axios.patch(`${url}/${drinkId}`, drink, config)).data as DrinkDTO;
}