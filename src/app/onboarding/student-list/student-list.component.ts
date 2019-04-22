import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../shared/services/student.service';
import { Student } from '../../shared/models/student.interface'
import { MatDialog } from '@angular/material';
import { DeleteDialogComponent } from '../../shared/components/delete-dialog/delete-dialog.component'
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  selectedCategory;
  displayedStudents: Student[];
  students: Student[];
  searchText:string;
  constructor(private studentService: StudentService, public dialog: MatDialog) { }

  ngOnInit() {
    this.selectedCategory = "All";
    this.students = this.displayedStudents = this.studentService.getStudentsList();
  }

  openDeleteStudentDialog(studentId: number): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.studentService.deleteStudent(studentId).subscribe(
          (success) => {
            if (success)
              var i = this.students.findIndex(student => student.id === studentId);
            this.students.splice(i, 1);
          }
        )
      }
    });
  }

}


