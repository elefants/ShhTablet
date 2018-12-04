import { NoiseService } from './../../services/noise/noise.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'shh-noise-chart',
  templateUrl: './noise-chart.component.html',
  styleUrls: ['./noise-chart.component.scss']
})
export class NoiseChartComponent implements OnInit {

  constructor(private noiseService: NoiseService) { }

  chart = new Chart({
    chart: {
      type: 'spline',
      animation: true,
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: []
  });

  ngOnInit() {
  }

}
