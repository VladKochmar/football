import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureItemComponent } from './fixture-item.component';

describe('FixtureItemComponent', () => {
  let component: FixtureItemComponent;
  let fixture: ComponentFixture<FixtureItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FixtureItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FixtureItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
