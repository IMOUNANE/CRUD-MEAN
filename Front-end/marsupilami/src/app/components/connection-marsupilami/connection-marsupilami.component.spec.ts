import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionMarsupilamiComponent } from './connection-marsupilami.component';

describe('ConnectionMarsupilamiComponent', () => {
  let component: ConnectionMarsupilamiComponent;
  let fixture: ComponentFixture<ConnectionMarsupilamiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectionMarsupilamiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionMarsupilamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
