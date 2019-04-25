import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDotSetComponent } from './data-dot-set.component';

describe('DataDotSetComponent', () => {
  let component: DataDotSetComponent;
  let fixture: ComponentFixture<DataDotSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDotSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDotSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
