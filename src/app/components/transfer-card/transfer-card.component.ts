import { Component, Input } from '@angular/core';
import { Transfer } from '../../models/transfer.model';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transfer-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTooltipModule],
  templateUrl: './transfer-card.component.html',
  styleUrl: './transfer-card.component.scss',
})
export class TransferCardComponent {
  @Input() transfer!: Transfer;
}
