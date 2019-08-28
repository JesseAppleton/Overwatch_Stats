import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlphaComponent } from './alpha/alpha.component'
import { BetaComponent } from './beta/beta.component'
import { LineChartComponent } from './line-chart/line-chart.component';

const routes: Routes = [
  {path: 'alpha', component: AlphaComponent},
  {path: 'beta', component: BetaComponent},
  {path: 'chart', component: LineChartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
