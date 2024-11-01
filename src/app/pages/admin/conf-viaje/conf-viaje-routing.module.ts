import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfViajePage } from './conf-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: ConfViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfViajePageRoutingModule {}
