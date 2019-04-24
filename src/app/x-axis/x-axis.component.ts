import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';

import * as d3 from 'd3';
import * as d3Axis from 'd3-axis';
import * as d3Scale from 'd3-scale';
import * as d3Selection from 'd3-selection';
import * as d3TimeFormat from 'd3-time-format';

@Component({
  selector: '[mag-x-axis]',
  template: ``,
  styleUrls: ['./x-axis.component.scss']
})
export class XAxisComponent implements OnChanges {
  
  
  @Input()
  autoScale: boolean;
  
  @Input()
  domain: Array<number>;
  
  @Input()
  dimensions: Array<number>;
  
  @Output()
  xReady: EventEmitter<any> = new EventEmitter();


  x;
  xAxis;
  
  
  
  constructor() { }
  
  ngOnChanges() {
    this.defineXFunction();
    this.buildAxis();
  }
  
  buildAxis() {    
    d3Selection.select('[mag-x-axis]')
    .attr('stroke-width', 2)
    .call(
      d3Axis.axisBottom(this.x)
        .ticks(10)
        .tickFormat(d3TimeFormat.timeFormat('%d/%m/%Y %H:%M:%S'))
    ).selectAll('text')
    .attr('class', 'mag-x-axis-tick')
    .attr('fill', 'black')
    .attr('transform', 'rotate(-45)')
    .attr('font-size', '0.5rem')
    .attr('dx', '-3rem')
    .attr('dy', '0.4rem');
  }

  defineXFunction() {
    // console.log('Building X axis with');
    // console.log('Range : ' + this.dimensions);
    // console.log('Domain : ' + this.domain);
    this.x = d3Scale.scaleTime()
    .range([this.dimensions[0], this.dimensions[1]])
    .domain([this.domain[0], this.domain[1]]);
    this.xReady.emit(this.x);
  }
  
}
