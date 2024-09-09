import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerClubCardComponent } from './player-club-card.component';

describe('PlayerClubCardComponent', () => {
  let component: PlayerClubCardComponent;
  let fixture: ComponentFixture<PlayerClubCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerClubCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerClubCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
