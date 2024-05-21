import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMobileNavbarComponent } from './admin-mobile-navbar.component';

describe('AdminMobileNavbarComponent', () => {
  let component: AdminMobileNavbarComponent;
  let fixture: ComponentFixture<AdminMobileNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminMobileNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminMobileNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
