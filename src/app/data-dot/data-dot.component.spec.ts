import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDotComponent } from './data-dot.component';

describe('DataDotComponent', () => {
  let component: DataDotComponent;
  let fixture: ComponentFixture<DataDotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
