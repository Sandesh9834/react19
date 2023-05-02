import { employees } from "./data";

export function TotalSalary() {
  return (
    <div>
      <p>
        Total Salary Expense: INR.
        {employees.reduce((total, employee) => (total = +employee.salary))}
      </p>
    </div>
  );
}
