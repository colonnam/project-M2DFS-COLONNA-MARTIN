import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MeteoComponent } from './meteo/meteo.component';

const routes: Routes = [
  {path: '',redirectTo:'/meteo',pathMatch:'full'},
  {path: 'meteo',component: MeteoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
