import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTransfersTableComponent } from './team-transfers-table.component';

describe('TeamTransfersTableComponent', () => {
  let component: TeamTransfersTableComponent;
  let fixture: ComponentFixture<TeamTransfersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamTransfersTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamTransfersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
