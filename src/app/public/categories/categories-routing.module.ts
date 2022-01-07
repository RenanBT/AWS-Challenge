import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoriesItemComponent} from "./categories-item/categories-item.component";
import {CategoriesListComponent} from "./categories-list/categories-list.component";

const routes: Routes = [

  {
    path: "", component: CategoriesListComponent
  },
  {
    path: "item", component: CategoriesItemComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule {
}


