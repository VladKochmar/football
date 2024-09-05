import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonFixtureItemComponent } from './skeleton-fixture-item.component';

describe('SkeletonFixtureItemComponent', () => {
  let component: SkeletonFixtureItemComponent;
  let fixture: ComponentFixture<SkeletonFixtureItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonFixtureItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkeletonFixtureItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
