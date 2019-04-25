import { Component, OnInit } from '@angular/core';
import { Serie } from './api/serie';
import { DataPoint } from './api/data-point';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'd3-chart';

  xBoundaries = [new Date(0), new Date(111111)];
  yBoundaries = [1000, 0];


  data: Serie;

  x;
  y;

  colorFunction = (d: DataPoint) => {
    return d.y > 500 ? 'red' : 'black';
  }

  ngOnInit() {
    this.data = [
      {
        x: new Date(1),
        y: Math.floor(Math.random() * 1000)
      }
    ];

    for (let i = 2; i < 100; i++) {
      this.data.push({
        x: new Date(i*1000),
        y: Math.floor(Math.random() * 1000)
      });
    }
  }

  xReady($event) {
    console.log('X axis built !')
    this.x = $event;
  }
  yReady($event) {
    console.log('y axis built !')
    this.y = $event;
  }

  changeBoundaries(id, $event) {
    this.yBoundaries[id] = $event;
    this.yBoundaries = Object.assign([], this.yBoundaries);
  }


}
