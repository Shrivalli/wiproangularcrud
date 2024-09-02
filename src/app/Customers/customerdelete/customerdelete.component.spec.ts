import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerdeleteComponent } from './customerdelete.component';

describe('CustomerdeleteComponent', () => {
  let component: CustomerdeleteComponent;
  let fixture: ComponentFixture<CustomerdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerdeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
