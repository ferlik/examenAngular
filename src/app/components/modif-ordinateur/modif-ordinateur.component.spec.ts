import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifOrdinateurComponent } from './modif-ordinateur.component';

describe('ModifOrdinateurComponent', () => {
  let component: ModifOrdinateurComponent;
  let fixture: ComponentFixture<ModifOrdinateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifOrdinateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifOrdinateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
