import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import * as d3 from 'd3';
import * as d3Axis from 'd3-axis';
import * as d3Scale from 'd3-scale';
import * as d3Selection from 'd3-selection';
import * as d3TimeFormat from 'd3-time-format';

@Component({
  selector: '[mag-y-axis]',
  template: '',
  styleUrls: ['./y-axis.component.scss']
})
export class YAxisComponent implements OnChanges {
  
  
  
  @Input()
  autoScale: boolean;
  
  @Input()
  domain: Array<number>;
  
  @Input()
  dimensions: Array<number>;
  
  @Output()
  yReady: EventEmitter<any> = new EventEmitter();
  
  
  y;
  yAxis;
  
  constructor() { }
  
  ngOnChanges() {
    this.defineXFunction();
    this.buildAxis();
  }
  
  buildAxis() {    
    this.yAxis = d3Selection.select('[mag-y-axis]')
    .attr('stroke-width', 2)
    .call(
      d3Axis.axisLeft(this.y)
      .ticks(10)
    ).selectAll('text')
    .attr('class', 'mag-y-axis-tick')
    .attr('fill', 'black')
    .attr('font-size', '0.8rem');
  }
  
  defineXFunction() {
    // console.log('Building X axis with');
    // console.log('Range : ' + this.dimensions);
    // console.log('Domain : ' + this.domain);
    this.y = d3Scale.scaleLinear()
    .range([this.dimensions[0], this.dimensions[1]])
    .domain([this.domain[0], this.domain[1]]);
    this.yReady.emit(this.y);
  }
  
}


