import { Component, DestroyRef, inject, input } from '@angular/core';
import { TableComponent } from './components/table/table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';

import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [TableComponent, MatButtonModule, MatIconModule],
  providers: [EmployeeService]
})
export class App {
  private employeeService = inject(EmployeeService);
  readonly dialog = inject(MatDialog);
  readonly destroyRef = inject(DestroyRef);
  title = input.required<string>();

  onAddRecord() {
    const dialogRef = this.dialog.open(EmployeeFormComponent, {
      width: '300px',
      enterAnimationDuration: '100MS',
      exitAnimationDuration: '100MS'
    });
    const subscription = dialogRef.afterClosed().subscribe(result => {
      if (result) 
        this.employeeService.onAddEmployee({ id: crypto.randomUUID(), ...result });
    });
    this.destroyRef.onDestroy(() => { subscription.unsubscribe(); })
  }
}
