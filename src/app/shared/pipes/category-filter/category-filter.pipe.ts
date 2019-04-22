import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../../models/student.interface';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(students: Student[], category): any {
    if (!students) return [];
    if (!category) return students;
    if (category === 'All') {
      return students;
    } else {
      return students.filter(student => student.category == category);
    }

  }

}
