import { getRecipe } from "@/services/RecipeServices";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

// type RecipeType = {
//     idDrink?: string,
//     strDrink?: string,
//     strDrinkAlternate?: string,
//     strTags?: string,
//     strVideo?: string,
//     strCategory?: string,
//     strIBA?: string,
//     strAlcoholic?: string,
//     strGlass?: string,
//     strInstructions?: string,
//     strDrinkThumb?: string,
//     strIngredient1?: string,
//     strIngredient2?: string,
//     strIngredient3?: string,
//     strIngredient4?: string,
//     strIngredient5?: string,
//     strIngredient6?: string,
//     strIngredient7?: string,
//     strIngredient8?: string,
//     strIngredient9?: string,
//     strIngredient10?: string,
//     strIngredient11?: string,
//     strIngredient12?: string,
//     strIngredient13?: string,
//     strIngredient14?: string,
//     strIngredient15?: string,
//     strMeasure1?: string,
//     strMeasure2?: string,
//     strMeasure3?: string,
//     strMeasure4?: string,
//     strMeasure5?: string,
//     strMeasure6?: string,
//     strMeasure7?: string,
//     strMeasure8?: string,
//     strMeasure9?: string,
//     strMeasure10?: string,
//     strMeasure11?: string,
//     strMeasure12?: string,
//     strMeasure13?: string,
//     strMeasure14?: string,
//     strMeasure15?: string,
// }

const RecipeDetails = () => {
    const id = useParams().toString();

    const [recipe, setRecipe] = useState([]);
    useEffect(()=> {
        getRecipe(id).then(res=> {
            if(!!res)
            setRecipe(res.data)
        console.log(recipe?.drinks[0].idDrink);
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