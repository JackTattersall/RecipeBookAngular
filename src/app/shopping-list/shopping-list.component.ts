import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('cheese', 2),
    new Ingredient('tomatoe', 2),
    new Ingredient('burger', 2),
    new Ingredient('bread bun', 1)
  ];

  constructor() { }

  ngOnInit() {
  }

}
