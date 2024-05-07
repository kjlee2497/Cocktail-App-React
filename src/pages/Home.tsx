import SearchResults from "@/components/shared/SearchResults";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getRecipePreviews } from "@/services/RecipeServices";
import { useState } from "react"

const Home = () => {
  
  const [searchValue, setSearchValue] = useState('');
  const [recipes, setRecipes] = useState<any[]>([]); // Replace `any[]` with the correct type if available

  const searchForRecipes = async (ingredient: string) => {
    try {
        const data = await getRecipePreviews(ingredient);
        if (data !== null) setRecipes(data?.drinks);
    } catch (error) {
        console.error("Error occurred while fetching recipe:", error);
    }
}

  return (
    <div className="flex flex-col w-full h-full">

      <div className="main-container items-center">
        <h1 className="title mt-3">Happy Hour</h1>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input 
              type="text"
              placeholder="Enter your ingredient" 
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button type="submit" onClick={(e) => {
              e.preventDefault;
              searchForRecipes(searchValue);
              }}>Search</Button>
          </div>
      </div>
{/* 
save API call results as a constant
throw in results as a prop into SearchResults component
populate a PreviewCard in SearchResults for every result

TODO:  add a loader while results are loading
TODO:  add infinite
*/}
      <div className="mt-10 items-center">
        <SearchResults recipes={recipes} />
      </div>

    </div>
  )
}

export default Home