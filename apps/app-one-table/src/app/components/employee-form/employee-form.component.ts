import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-form',
  imports: [MatButtonModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatSelectModule, MatInputModule, MatFormFieldModule, MatSlideToggleModule, MatRadioModule, ReactiveFormsModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss',
})
export class EmployeeFormComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<EmployeeFormComponent>);
  data = inject<{ employee: Employee }>(MAT_DIALOG_DATA);

  employeeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    department: new FormControl('HR'),
    isActive: new FormControl(false)
  });

  ngOnInit(): void {
    if (this.data?.employee) {
      this.employeeForm.patchValue({
        name: this.data.employee.name,
        email: this.data.employee.email,
        department: this.data.employee.department,
        isActive: this.data.employee.isActive
      })
    }
  }

  onSave() {
    this.dialogRef.close(this.data ? { id: this.data.employee.id, ...this.employeeForm.value } : this.employeeForm.value);
  }
}
