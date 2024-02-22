import { getRecipe } from "@/services/RecipeServices";
import { Drink } from "@/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

// TODO:  utilize Types in TS as DTOs for this portion of the code

const RecipeDetails = () => {
    const {id} = useParams();
    const recipeId = id ?? 'defaultid';

    const [recipe, setRecipe] = useState<Drink>();
    useEffect(()=> {
        getRecipe(recipeId).then(res=> {
            if (res !== null) {
                setRecipe(res);
                console.log(recipe?.idDrink);
            }
        // console.log(recipe);
        })
    }, [])
    
    
  return (
    <div>
        <div>
            <p>{recipe?.idDrink}</p>
            <p>{recipe?.strDrink}</p>
            <img src={recipe?.strDrinkThumb} alt="thumbnail" />
        </div>
    </div>
  )
}

export default RecipeDetails