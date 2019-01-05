import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewnumbersComponent } from './newnumbers.component';

describe('NewnumbersComponent', () => {
  let component: NewnumbersComponent;
  let fixture: ComponentFixture<NewnumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewnumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewnumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
