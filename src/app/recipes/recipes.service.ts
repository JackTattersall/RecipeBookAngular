import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Cheeseburger',
      'yummy cheeseburger',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Cheeseburger.png/1599px-Cheeseburger.png',
      [
        new Ingredient('Bun', 1),
        new Ingredient('Burger', 1),
        new Ingredient('Ketchup', 1)
      ]
    ),
    new Recipe(
      'Kebab',
      'dirty kebab',
      'http://cdn1.zfood.co.uk/352/images/kebab.png?auto=compress',
      [
        new Ingredient('Pitta Bread', 1),
        new Ingredient('Meat', 1),
        new Ingredient('Salad', 1)
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
