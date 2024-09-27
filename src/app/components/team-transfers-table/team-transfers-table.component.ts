import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TransferInfo } from '../../models/transfer.model';
import { RouterLink } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';

type Destination = 'in' | 'out';

@Component({
  selector: 'app-team-transfers-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    RouterLink,
    MatTooltipModule,
    CommonModule,
  ],
  templateUrl: './team-transfers-table.component.html',
  styleUrl: './team-transfers-table.component.scss',
})
export class TeamTransfersTableComponent implements OnInit {
  @Input() destination!: Destination;
  @Input() transfers!: TransferInfo[];
  filteredTransfers: TransferInfo[] = [];

  teamType: Destination = 'in';
  displayedColumns: string[] = ['name', 'club', 'date', 'fee'];

  ngOnInit(): void {
    this.teamType = this.destination === 'in' ? 'out' : 'in';
    this.filteredTransfers = this.transfers;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    this.filteredTransfers = this.transfers.filter((transfer) => {
      return (
        transfer.player.name.toLowerCase().includes(filterValue) ||
        transfer.transfers[0].date
          .toString()
          .toLowerCase()
          .includes(filterValue) ||
        transfer.transfers[0].teams[this.teamType].name
          .toLowerCase()
          .includes(filterValue) ||
        transfer.transfers[0].type.toLowerCase().includes(filterValue)
      );
    });
  }
}
