import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Chart, ChartModule } from 'angular-highcharts';

import { HomePage } from './home.page';
import { CounterComponent } from './components/counter/counter.component';
import { NoiseChartComponent } from './components/noise-chart/noise-chart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    ChartModule
  ],
  declarations: [HomePage, CounterComponent, NoiseChartComponent]
})
export class HomePageModule {}
