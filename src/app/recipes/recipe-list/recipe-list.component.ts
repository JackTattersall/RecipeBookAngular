import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Cheeseburger',
      'yummy cheeseburger',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Cheeseburger.png/1599px-Cheeseburger.png'
    ),
    new Recipe(
      'Cheeseburger 2',
      'yummy cheeseburger',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Cheeseburger.png/1599px-Cheeseburger.png'
    )
  ];
  @Output() recipeElementSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipeElement: Recipe) {
    this.recipeElementSelected.emit(recipeElement);
  }

}
