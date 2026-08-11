import { Component, inject } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-employee-delete-confirmation',
  imports: [MatDialogContent, MatDialogActions, MatDialogClose, MatDialogTitle, MatButtonModule],
  templateUrl: './employee-delete-confirmation.component.html',
  styleUrl: './employee-delete-confirmation.component.scss',
})
export class EmployeeDeleteConfirmationComponent {
  readonly dialogRef = inject(MatDialogRef<EmployeeDeleteConfirmationComponent>);
  data = inject<{ id: number | string; employeeName: string; }>(MAT_DIALOG_DATA);

  onDeleteRecord() {
    this.dialogRef.close(this.data.id);
  }
}
