import { Link } from "react-router-dom"
import { Button } from "../ui/button"

const PreviewCard = ( recipe : any ) => {  
  return (
    <div className="preview-card">
        <h2 className="my-3 text-lg text-wrap">{recipe?.strDrink}</h2>
        <img 
            src={recipe?.strDrinkThumb} 
            alt="cocktail-image"
            width={240}
            height={240}
        />
        <Link to={`/recipe/${recipe?.idDrink}`}>
            <Button className='preview-button'>Get Recipe</Button>
        </Link>
        {/* <p className="my-3">{recipe?.idDrink}</p> */}
    </div>
  )
}

export default PreviewCard