import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Student } from '../../shared/models/student.interface';
import {Router} from '@angular/router';
import {StudentService} from '../../shared/services/student.service'
@Component({
  selector: 'app-student-list-card',
  templateUrl: './student-list-card.component.html',
  styleUrls: ['./student-list-card.component.css']
})
export class StudentListCardComponent implements OnInit {
  @Input() student: Student;
  @Output() deleteStudent = new EventEmitter<number>();
  constructor(private router: Router, private studentService: StudentService) { }

  ngOnInit() {
  }

  editButtonClick(studentId:number){
    this.router.navigate(['./dashboard/editForm', studentId]);
  }

  viewButtonClick(studentId:number){
    this.router.navigate(['./dashboard/viewForm', studentId]);
  }

  deleteButtonClick(studentId:number) {
    this.deleteStudent.emit(studentId);
  }

}
