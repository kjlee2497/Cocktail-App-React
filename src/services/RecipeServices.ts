import { Drink } from "@/types";
import axios from "axios";

const http = axios.create({
    baseURL: "https://www.thecocktaildb.com/api/json/v1/1/"
});

export async function getRecipe(id: string): Promise<Drink[]> {
    try {
        const response = await http.get(`/lookup.php?i=${id}`);

        if (!response) throw Error;
        return response.data.drinks; // Assuming response.data contains the actual drink data
    } catch (err) {
        console.log(err);
        return [];
    }
}

export async function getRecipePreviews(ingredient: string) {
    // www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
    try {
        const response = await http.get(`/filter.php?i=${ingredient}`);

        if(!response) throw Error;
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

