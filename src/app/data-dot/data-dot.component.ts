import { Component, OnChanges, Input } from '@angular/core';

import { DataPoint } from '../api/data-point';

@Component({
  selector: '[mag-data-dot]',
  template: '',
  styleUrls: ['./data-dot.component.scss']
})
export class DataDotComponent implements OnChanges {


  @Input()
  data: DataPoint;


  constructor() { }

  ngOnChanges() {

    
  }

}
