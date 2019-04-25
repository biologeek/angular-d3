import { Component, OnChanges, Input } from '@angular/core';
import { Serie } from '../api/serie';

import * as d3 from 'd3';
import * as d3Axis from 'd3-axis';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Selection from 'd3-selection';
import * as d3TimeFormat from 'd3-time-format';

@Component({
  selector: '[mag-curve]',
  template: '',
  styleUrls: ['./curve.component.scss']
})
export class CurveComponent implements OnChanges {

  @Input()
  x: any;
  @Input()
  y: any;
  @Input()
  data: Serie;
  @Input()
  label: any;
  @Input()
  id: string;


  line;

  constructor() { }

  ngOnChanges() {
    if (!this.id) {
      this.generateRandomId();
    }
    this.clearLine();
    this.defineLine();
    this.drawLine();
  }

  clearLine() {
    d3Selection.select(`#curve-${this.id}`)
    .remove();
  }
  drawLine() {
    d3Selection.select('[mag-curve]')
    .append('path')
    .attr('id', `curve-${this.id}`)
    .attr('stroke', 'black')
    .attr('fill', 'transparent')
    .datum(this.data)
    //.attr('clip-path', 'url(#curve-clip)')
    .attr('d', this.line)
  }


  defineLine() {
    this.line = d3Shape.line()
    .x(d => this.x(d.x))
    .y(d => this.y(d.y));
  }


  generateRandomId() {
    this.id = Math.floor(Math.random() * 10000).toString(16);
  }

}
