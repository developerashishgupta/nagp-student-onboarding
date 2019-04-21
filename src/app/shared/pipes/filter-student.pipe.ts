import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../models/student.interface'

@Pipe({
  name: 'filterStudent'
})
export class FilterStudentPipe implements PipeTransform {

  transform(students: Student[], searchText: string): any {
    if (!students) return [];
    if (!searchText) return students;
    searchText = searchText.toLowerCase();
    return students.filter(student => {
      return student.name.toLowerCase().includes(searchText) ||
      student.fathersName.toLowerCase().includes(searchText) ||
      student.mothersName.toLowerCase().includes(searchText)
    });
  }

}