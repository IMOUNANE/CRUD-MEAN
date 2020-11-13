import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsupilamisListComponent } from './marsupilamis-list.component';

describe('MarsupilamisListComponent', () => {
  let component: MarsupilamisListComponent;
  let fixture: ComponentFixture<MarsupilamisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarsupilamisListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsupilamisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
