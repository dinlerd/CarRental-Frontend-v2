import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandColorFilterComponent } from './brand-color-filter.component';

describe('BrandColorFilterComponent', () => {
  let component: BrandColorFilterComponent;
  let fixture: ComponentFixture<BrandColorFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandColorFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandColorFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
