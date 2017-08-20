import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {AuthGuard} from './auth/auth-guard.service';
import {HomeComponent} from './base/home/home.component';

const appRoutes: Routes = [
  // Home route
  { path: '', component: HomeComponent },

  // Recipe routes
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule', canLoad: [AuthGuard] },

  // Shopping-List routes
  { path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
