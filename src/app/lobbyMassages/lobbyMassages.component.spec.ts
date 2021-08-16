import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbyMassagesComponent } from './lobbyMassages.component';

describe('LobbyMassagesComponent', () => {
  let component: LobbyMassagesComponent;
  let fixture: ComponentFixture<LobbyMassagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LobbyMassagesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LobbyMassagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
