import { NoiseService } from './../../services/noise/noise.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shh-noise-chart',
  templateUrl: './noise-chart.component.html',
  styleUrls: ['./noise-chart.component.scss']
})
export class NoiseChartComponent implements OnInit {

  constructor(private noiseService: NoiseService) { }

  ngOnInit() {
  }

}
