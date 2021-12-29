import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardSubMenuComponent } from './dasboard-sub-menu.component';

describe('DasboardSubMenuComponent', () => {
  let component: DasboardSubMenuComponent;
  let fixture: ComponentFixture<DasboardSubMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasboardSubMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DasboardSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
