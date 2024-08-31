import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingsComponent } from './standings.component';
import { MatTableModule } from '@angular/material/table';

describe('StandingsComponent', () => {
  let component: StandingsComponent;
  let fixture: ComponentFixture<StandingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandingsComponent, MatTableModule],
    }).compileComponents();

    fixture = TestBed.createComponent(StandingsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
