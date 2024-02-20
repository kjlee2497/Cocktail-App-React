import { getRecipe } from "@/services/RecipeServices";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

// TODO:  utilize Types in TS as DTOs for this portion of the code

const RecipeDetails = () => {
    const id = useParams().toString();

    const [recipe, setRecipe] = useState({});
    useEffect(()=> {
        getRecipe(id).then(res=> {
            if (!!res) {
                setRecipe(res);
                console.log(recipe);
            }
        console.log(recipe);
        })
    }, [])
    
    
  return (
    <div>
        <div>
            {/* <p>{recipe[0].idDrink}</p>
            <p>{recipe[0].strDrink}</p>
            <img src={recipe[0]?.strDrinkThumb} alt="thumbnail" /> */}
        </div>
    </div>
  )
}

export default RecipeDetails