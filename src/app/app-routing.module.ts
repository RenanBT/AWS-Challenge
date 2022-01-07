import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './public/home/home.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: 'devices',
    loadChildren: () => import('./public/devices/devices.module').then(m => m.DevicesModule),
  },
  {
    path: 'categories',
    loadChildren: () => import('./public/categories/categories.module').then(m => m.CategoriesModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}




