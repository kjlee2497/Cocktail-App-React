import { RecipeProps } from "@/types";
import PreviewCard from "./PreviewCard";

type SearchResultsProps = {
  recipes: RecipeProps[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ recipes }) => {
  if (recipes.length > 0) {
    return (
        <div >
            <div className="flex flex-row flex-wrap gap-10 text-center">
                {recipes.map((recipe: RecipeProps) => (
                <PreviewCard key={recipe.idDrink} {...recipe} />
                ))}
            </div>
        </div>
    );
  }
};

export default SearchResults;
