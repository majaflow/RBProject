import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShopsComponent } from './create-shops.component';

describe('CreateShopsComponent', () => {
  let component: CreateShopsComponent;
  let fixture: ComponentFixture<CreateShopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateShopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
