import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueFixturesComponent } from './league-fixtures.component';

describe('LeagueFixturesComponent', () => {
  let component: LeagueFixturesComponent;
  let fixture: ComponentFixture<LeagueFixturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeagueFixturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeagueFixturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
