import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationsAndVacanciesComponent } from './organizations-and-vacancies.component';

describe('OrganizationsAndVacanciesComponent', () => {
  let component: OrganizationsAndVacanciesComponent;
  let fixture: ComponentFixture<OrganizationsAndVacanciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationsAndVacanciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationsAndVacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
