import { Subject } from "rxjs";

import { Employee } from "../models/employee.model";

export class EmployeeService {
    readonly employee$ = new Subject<Employee>();

    onAddEmployee(employee: Employee) {
        this.employee$.next(employee);
    }
}