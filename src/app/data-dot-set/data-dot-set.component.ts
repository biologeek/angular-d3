import { Component, OnChanges, Input } from '@angular/core';
import { Serie } from '../api/serie';
import { DataPoint } from '../api/data-point';
import * as d3Selection from 'd3-selection';

@Component({
  selector: '[mag-data-dot-set]',
  template: `
  <svg:circle 
  *ngFor="let dataDot of data" 
  mag-data-dot 
  clip-path="url(#curve-clip)"
  class="mag-data-dot"
  [attr.r]="radius"
  [attr.fill]="color(dataDot)"
  [attr.cx]="x(dataDot.x)"
  [attr.cy]="y(dataDot.y)"
  [data]="dataDot"
  (mouseenter)="onMouseEnter(dataDot, $event)"
  (mouseleave)="onMouseLeave(dataDot)"
  (click)="onClick(dataDot)"
  (contextmenu)="onRightClick(dataDot)"></circle>`,
  styleUrls: ['./data-dot-set.component.scss']
})
/**
* Represents a group of dots along the curve
*/
export class DataDotSetComponent implements OnChanges {
  
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
  
  @Input()
  radius: number;
  
  /**
  * Defines the colour
  */
  @Input()
  color: (a: DataPoint) => string;
  
  constructor() { }
  
  ngOnChanges() {
    if (!this.color) {
      this.color = () => 'steelblue';
    }    
  }
  
  onRightClick(dataDot) {
    console.log('Right click on : ' + dataDot.x);
  }
  
  onClick(dataDot) {
    console.log('Click on : ' + dataDot.x);
  }
  
  /**
   * Draws 2 indication lines and positions tooltip near mouse
   * @param dataDot the data point on which mouse is
   * @param $event the mouseEnter event 
   */
  onMouseEnter(dataDot, $event) {
    const dotHoverG = d3Selection.select('[mag-data-dot-set]')
    .append('g')
    .attr('id', 'dot-hover-g');

    dotHoverG.append('line')
    .attr('id', 'dot-hover-x-line')
    .attr('x1', this.x(dataDot.x))
    .attr('x2', this.x(dataDot.x))
    .attr('y1', 0)
    .attr('y2', 700)
    .attr('stroke', 'red')
    .attr('stroke-dasharray', '8 8')
    .attr('stroke-width', 3);
    dotHoverG.append('line')
    .attr('id', 'dot-hover-y-line')
    .attr('y1', this.y(dataDot.y))
    .attr('y2', this.y(dataDot.y))
    .attr('x1', 0)
    .attr('x2', 1500)
    .attr('stroke', 'red')
    .attr('stroke-dasharray', '8 8')
    .attr('stroke-width', 3);

    d3Selection.select('.dot-hover-tooltip')
    .style('left', `${$event.clientX + 30}px`)
    .style('top', `${$event.clientY + 30}px`)
    .style('opacity', 1);
    d3Selection.select('#dot-hover-tooltip-x-container')    
    .html(`${dataDot.x}`)
    d3Selection.select('#dot-hover-tooltip-y-container')    
    .html(`${dataDot.y}`)
  }
  
  /**
   * Hide tooltip and destroy indication lines
   * @param dataDot the data point on which mouse is
   */
  onMouseLeave(dataDot) {
    d3Selection.select('#dot-hover-g')
    .remove();
    d3Selection.select('.dot-hover-tooltip')
    .style('opacity', 0);
  }
  
}
