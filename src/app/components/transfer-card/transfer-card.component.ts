import { Component, Input } from '@angular/core';
import { Transfer } from '../../models/transfer.model';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-transfer-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTooltipModule, RouterLink],
  templateUrl: './transfer-card.component.html',
  styleUrl: './transfer-card.component.scss',
})
export class TransferCardComponent {
  @Input() transfer!: Transfer;
}
