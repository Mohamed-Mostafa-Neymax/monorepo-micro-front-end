import { Component, input } from '@angular/core';

import { SummaryCardComponent } from '../../../../libs/shared/ui/src/lib/summary-card/summary-card.component';
import { RIGHT_CARDS, COMPANY_INFO } from './models/information.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [SummaryCardComponent]
})
export class App {
  title = input.required<string>();
  information = RIGHT_CARDS;
  companyInfo = COMPANY_INFO;
}
