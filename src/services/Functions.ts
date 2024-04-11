import { Drink } from "@/types";

export function getIngredients(drink: Drink): string[] {
    const ingredients: string[] = [];

    for (let i = 1; i <= 15; i++) {
        const ingredientKey = `strIngredient${i}` as keyof Drink;

        const ingredient = drink[ingredientKey];

        // Ensure ingredient is not null or undefined before pushing
        if (ingredient && typeof ingredient === 'string') {
            ingredients.push(`${ingredient.trim()}`);
        }
    }

    return ingredients;
}

export function getMeasurements(drink: Drink): string[] {
    const measurements: string[] = [];

    for (let i = 1; i <= 15; i++) {
        const measureKey = `strMeasure${i}` as keyof Drink;

        const measure = drink[measureKey];
        
        // Ensure measure is not null or undefined before pushing
        if (measure && typeof measure === 'string') {
            measurements.push(measure.trim());
        }
    }

    return measurements;
}