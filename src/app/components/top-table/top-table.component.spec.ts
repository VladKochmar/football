import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTableComponent } from './top-table.component';
import { MatTableModule } from '@angular/material/table';

describe('TopTableComponent', () => {
  let component: TopTableComponent;
  let fixture: ComponentFixture<TopTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopTableComponent, MatTableModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TopTableComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
