import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('cheese', 2),
    new Ingredient('tomatoe', 2),
    new Ingredient('burger', 2),
    new Ingredient('bread bun', 1)
  ];

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.emitAlteredIngredients();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.emitAlteredIngredients();
  }

  updateIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.emitAlteredIngredients();
  }

  emitAlteredIngredients() {
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
