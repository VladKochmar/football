import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonTransferComponent } from './skeleton-transfer.component';

describe('SkeletonTransferComponent', () => {
  let component: SkeletonTransferComponent;
  let fixture: ComponentFixture<SkeletonTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonTransferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkeletonTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
