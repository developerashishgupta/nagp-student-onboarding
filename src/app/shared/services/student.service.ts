import { Injectable } from '@angular/core';
import { LocalStorageDataService } from './data-local-storage.service'
import { Student } from '../models/student.interface'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private dataService: LocalStorageDataService) { }

  public onboardStudent(student: Student): void {
    var autoIncrementId = this.dataService.getItemFromLocalStorage('autoIncrementId');
    var students: Student[] = this.dataService.getItemFromLocalStorage('students');

    student.id = autoIncrementId + 1;
    if (!students) {
      students = new Array<Student>();
    }
    students.push(student);
    this.dataService.setItemToLocalStorage('students', students);
    this.dataService.setItemToLocalStorage('autoIncrementId', autoIncrementId + 1);
  }

  public getStudentsList(): Student[] {
    return this.dataService.getItemFromLocalStorage('students');
  }

  public getStudent(studentId): Observable<Student> {
    var students: Student[] = this.dataService.getItemFromLocalStorage('students');
    return of(students.find(student => {
      return student.id === studentId;
    }
    ));
  }

  public updateStudent(studentId: number,student:Student){
    var students: Student[] = this.dataService.getItemFromLocalStorage('students');
    var i =students.findIndex(student => student.id === studentId);
    students[i]=student;
    students[i].id=studentId;
    this.dataService.setItemToLocalStorage('students', students);
  }

  public deleteStudent(studentId:number): Observable<boolean> {
    var students: Student[] = this.dataService.getItemFromLocalStorage('students');
    var i =students.findIndex(student => student.id === studentId);
    students.splice(i,1);
    this.dataService.setItemToLocalStorage('students', students);
    return of(true);
  }

}
