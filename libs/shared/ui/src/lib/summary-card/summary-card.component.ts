import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { SummmaryItem } from '../models/summary-item.model';

@Component({
  selector: 'shared-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrl: './summary-card.component.scss',
  imports: [MatIconModule, MatButtonModule]
})
export class SummaryCardComponent {
  private router = inject(Router);
  summaryData = input.required<SummmaryItem>();

  onNavigateProject(path: string) {
    this.router.navigate([path]);
  }
}
