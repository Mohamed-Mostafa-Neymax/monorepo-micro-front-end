import { AfterViewInit, Component, DestroyRef, inject, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';

import { EMPLOYEES } from './employees';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { EmployeeDeleteConfirmationComponent } from '../employee-delete-confirmation/employee-delete-confirmation.component';

@Component({
  selector: 'app-table',
  imports: [MatTableModule, MatPaginatorModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements AfterViewInit, OnInit {
  readonly dialog = inject(MatDialog);
  private destroyRef = inject(DestroyRef);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['id', 'name', 'email', 'department', 'isActive', 'actions'];
  dataSource = new MatTableDataSource<Employee>(EMPLOYEES);
  private employeeService = inject(EmployeeService);

  ngOnInit(): void {
    const subscription = this.employeeService.employee$.subscribe(updatedEmployee => {
      const isEmployeeExist = this.dataSource.data.find(employeeItem => employeeItem.id === updatedEmployee.id);
      this.dataSource.data = isEmployeeExist ? this.dataSource.data.map(employeeItem => employeeItem.id === updatedEmployee.id ? updatedEmployee : employeeItem) : [...this.dataSource.data, updatedEmployee];
      this.dataSource._updateChangeSubscription();
    });

    this.destroyRef.onDestroy(() => { subscription.unsubscribe(); })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onEditEmployee(employee: Employee) {
    const dialogRef = this.dialog.open(EmployeeFormComponent, {
      width: '300px',
      enterAnimationDuration: '100MS',
      exitAnimationDuration: '100MS',
      data: { employee }
    });
    const subscription = dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.employeeService.onAddEmployee({ id: result.id, ...result })
    });
    this.destroyRef.onDestroy(() => { subscription.unsubscribe(); });
  }

  onDeleteEmployee(employee: Employee) {
    const dialogRef = this.dialog.open(EmployeeDeleteConfirmationComponent, {
      width: '400px',
      enterAnimationDuration: '100MS',
      exitAnimationDuration: '100MS',
      data: { id: employee.id, employeeName: employee.name }
    });
    const subscription = dialogRef.afterClosed().subscribe((empId: number | string) => {
      if (empId) {
        this.dataSource.data = this.dataSource.data.filter(employeeItem => employeeItem.id !== empId);
        this.dataSource._updateChangeSubscription();
      }
    });
    this.destroyRef.onDestroy(() => { subscription.unsubscribe(); });
  }
}
