import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DevicesListComponent} from "./devices-list/devices-list.component";
import {DevicesItemComponent} from "./devices-item/devices-item.component";

const routes: Routes = [

  {
    path: "", component: DevicesListComponent
  },
  {
    path: "item", component: DevicesItemComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesRoutingModule {
}


