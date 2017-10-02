import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbushComponent } from './ambush.component';

describe('AmbushComponent', () => {
  let component: AmbushComponent;
  let fixture: ComponentFixture<AmbushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
