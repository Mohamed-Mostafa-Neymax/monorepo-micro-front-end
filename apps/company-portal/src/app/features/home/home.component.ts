import { Component, input } from '@angular/core';

import { SUMMARY_STATISTICS, REMOTE_PROJECTS } from './summary-items';
import { SummaryCardComponent } from '../../../../../../libs/shared/ui/src/lib/summary-card/summary-card.component';
// import { SummaryCardComponent } from '@ng-monorepo-micro-fe-workspace/ui';

@Component({
  selector: 'app-home',
  imports: [SummaryCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = input.required<string>();
  statistics = SUMMARY_STATISTICS;
  projects = REMOTE_PROJECTS;
}
