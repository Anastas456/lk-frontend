import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationsForModerationComponent } from './organizations-for-moderation.component';

describe('OrganizationsForModerationComponent', () => {
  let component: OrganizationsForModerationComponent;
  let fixture: ComponentFixture<OrganizationsForModerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationsForModerationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationsForModerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
