import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartpageComponent } from './cartpage.component';

describe('CartpageComponent', () => {
  let component: CartpageComponent;
  let fixture: ComponentFixture<CartpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

function beforeEach(arg0: () => Promise<void>) {
  throw new Error('Function not implemented.');
}
function expect(component: CartpageComponent) {
  throw new Error('Function not implemented.');
}

