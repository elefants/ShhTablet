import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shh-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  shhCount = 10;

  constructor() { }

  ngOnInit() {
  }

  getShhCypher(cypher: number) {
    return this.shhCount
      .toString()
      .padStart(4, '0')
      .substr(4 - cypher, 1);
  }
}
