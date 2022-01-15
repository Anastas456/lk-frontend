import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationsMainComponent } from './dashboard-organizations-main.component';

describe('DashboardOrganizationsMainComponent', () => {
  let component: DashboardOrganizationsMainComponent;
  let fixture: ComponentFixture<DashboardOrganizationsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardOrganizationsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOrganizationsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
