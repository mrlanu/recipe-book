import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {

  constructor(private shoppingListService: ShoppingListService) {}

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Pizza',
      'Test',
      'https://www.maxpixel.net/static/photo/1x/Comisa-Healthy-Tomato-Recipe-2930786.jpg',
      [new Ingredient('Kisto', 1), new Ingredient('Kobasa', 5)]),
    new Recipe('Ribs',
      'Test 2',
      'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg',
      [new Ingredient('Mneso', 1), new Ingredient('BBQ sauce', 1)])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppinhList(ingrs: Ingredient[]) {
    this.shoppingListService.addIngredients(ingrs);
  }
}
