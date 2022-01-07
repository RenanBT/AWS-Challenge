import {NgModule} from '@angular/core';
import {DevicesRoutingModule} from "./devices-routing.module";
import {DevicesListComponent} from './devices-list/devices-list.component';
import {DevicesItemComponent} from './devices-item/devices-item.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    DevicesListComponent,
    DevicesItemComponent
  ],
  imports: [
    SharedModule,
    DevicesRoutingModule,
  ],
  exports: [],
  providers: [],
  entryComponents: []
})
export class DevicesModule {
}
