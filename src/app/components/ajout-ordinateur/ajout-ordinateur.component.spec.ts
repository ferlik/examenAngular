import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutOrdinateurComponent } from './ajout-ordinateur.component';

describe('AjoutOrdinateurComponent', () => {
  let component: AjoutOrdinateurComponent;
  let fixture: ComponentFixture<AjoutOrdinateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutOrdinateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutOrdinateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
