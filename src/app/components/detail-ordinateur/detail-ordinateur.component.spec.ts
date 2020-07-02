import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOrdinateurComponent } from './detail-ordinateur.component';

describe('DetailOrdinateurComponent', () => {
  let component: DetailOrdinateurComponent;
  let fixture: ComponentFixture<DetailOrdinateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailOrdinateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailOrdinateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
