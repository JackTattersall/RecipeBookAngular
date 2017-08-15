import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('cheese', 2),
    new Ingredient('tomatoe', 2),
    new Ingredient('burger', 2),
    new Ingredient('bread bun', 1)
  ];

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  clear() {
    this.ingredients.length = 0;
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
