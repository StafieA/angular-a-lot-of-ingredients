import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Burger',
      'Taste like a shit',
      'https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg'
    ),
    new Recipe(
      'Calamar',
      'The price worth',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
