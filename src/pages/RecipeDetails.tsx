import { getIngredients, getMeasurements } from "@/services/Functions";
import { getRecipe } from "@/services/RecipeServices";
import { Drink } from "@/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

// TODO:  utilize Types in TS as DTOs for this portion of the code

const RecipeDetails = () => {
    const {id} = useParams();
    const recipeId = id ?? 'defaultid';
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [measurements, setMeasurements] = useState<string[]>([]);

    const [recipe, setRecipe] = useState<Drink>();
    useEffect(()=> {
        getRecipe(recipeId).then(res=> {
            if (res !== null && res !== undefined) {
                setRecipe(res);
                console.log(recipe?.idDrink);
                setIngredients(getIngredients(res));
                setMeasurements(getMeasurements(res));
            }
        console.log(ingredients);
        console.log(measurements);
        })
    }, [])

    
    
  return (
    <div className='main-container'>
        <div className='RecipeCard'>
            <div className='recipe-name'>
                <p>{recipe?.strDrink}</p>
                {/* <img
                    src={recipe?.strDrinkThumb}
                    alt="thumbnail" 
                    width={200} 
                    height={200} 
                /> */}
            </div>
            <div className='lists'>
                <div className='measurements'>
                    {measurements.map((measurement, index) => (
                        <p key={`measurement-${index}`}>{measurement}</p>
                    ))}
                </div>
                <div className='ingredients'>
                    {ingredients.map((ingredient, index) => (
                        <p key={`ingredient-${index}`}>{ingredient}</p>
                    ))}
                </div>
            </div>
            <div className='instructions'>
                <p>{recipe?.strInstructions}</p>
            </div>

        </div>
    </div>
  )
}

export default RecipeDetails