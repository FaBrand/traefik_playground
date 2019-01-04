import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoremipsumComponent } from './loremipsum.component';

describe('LoremipsumComponent', () => {
  let component: LoremipsumComponent;
  let fixture: ComponentFixture<LoremipsumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoremipsumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoremipsumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
