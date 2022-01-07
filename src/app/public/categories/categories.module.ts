import {NgModule} from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {CategoriesRoutingModule} from "./categories-routing.module";
import {CategoriesItemComponent} from './categories-item/categories-item.component';
import {CategoriesListComponent} from './categories-list/categories-list.component';


@NgModule({
  declarations: [
    CategoriesItemComponent,
    CategoriesListComponent
  ],
  imports: [
    SharedModule,
    CategoriesRoutingModule,
  ],
  exports: [],
  providers: [],
  entryComponents: []
})


export class CategoriesModule {
}
