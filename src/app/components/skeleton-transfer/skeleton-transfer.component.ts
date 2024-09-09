import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-skeleton-transfer',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './skeleton-transfer.component.html',
  styleUrl: './skeleton-transfer.component.scss',
})
export class SkeletonTransferComponent {}
