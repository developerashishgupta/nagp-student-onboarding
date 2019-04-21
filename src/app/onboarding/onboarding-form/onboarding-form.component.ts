import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from "@angular/forms";
import { Student } from '../../shared/models/student.interface'
import { StudentCategory } from '../../shared/enums/student-category-enum';
import { StudentService } from '../../shared/services/student.service'
import { ActivatedRoute } from '@angular/router';
import { IDocument } from '../../shared/models/document.interface'

@Component({
  selector: 'app-onboarding-form',
  templateUrl: './onboarding-form.component.html',
  styleUrls: ['./onboarding-form.component.css']
})
export class OnboardingFormComponent implements OnInit {

  form: FormGroup;
  student: Student;
  studentCategories = StudentCategory;
  categoryKeys: string[];
  documents: FormArray;
  isEditMode: boolean = false;
  isViewMode: boolean = false;
  studentId: number;
  documentList: IDocument[];
  constructor(private formBuilder: FormBuilder, private studentService: StudentService,
    private route: ActivatedRoute) {
    this.categoryKeys = Object.keys(StudentCategory).filter(Number);
  }

ngOnInit() {
  this.createform();
  this.loadDocuments(StudentCategory.Domestic);

  this.route.paramMap.subscribe(params => {
    this.studentId = +params.get('id');

    if (this.studentId) {
      if (this.route.snapshot.url[0].path === 'editForm') {
        this.isEditMode = true;
        this.getStudentDetails(this.studentId, true);
      }
      else if (this.route.snapshot.url[0].path === 'viewForm') {
        this.isViewMode = true;
        this.getStudentDetails(this.studentId, false);
      }
    }
  })
}

createform(): void {
  this.form = this.formBuilder.group({
    name: ['', [Validators.required]],
    category: ['', [Validators.required]],
    documents: new FormArray([]),
    dateOfBirth: [, [Validators.required]],
    fathersName: ['', [Validators.required]],
    mothersName: ['', [Validators.required]],
    lastScore: ['', [Validators.required]],
  })
}

loadDocuments(studentCategory: StudentCategory): void {
  this.documents = this.form.controls.documents as FormArray;
  this.documents.push(this.formBuilder.control(''));
  this.documents.push(this.formBuilder.control(''));
  this.documents.push(this.formBuilder.control(''));
  this.documents.push(this.formBuilder.control(''));
}

onboardButtonClicked(event: Event) {
  if (this.isEditMode) {
    this.studentService.updateStudent(this.studentId, this.form.value);
  }
  else {
    this.studentService.onboardStudent(this.form.value);
  }

}

getStudentDetails(studentId: Number, isEditMode: boolean) {
  return this.studentService.getStudent(studentId).subscribe(
    (student: Student) => {
      if (isEditMode)
        this.editStudent(student)
      else
        this.viewStudent(student)
    },
    (err: Error) => console.log(err))
}

editStudent(student: Student) {
  this.form.patchValue({
    name: student.name,
    category: student.category,
    documents: [true, false, false, false],
    dateOfBirth: student.dateOfBirth,
    fathersName: student.fathersName,
    mothersName: student.mothersName,
    lastScore: student.lastScore
  })
}

viewStudent(student: Student){
  this.form.setValue({
    name: student.name,
    category: student.category,
    documents: [true, false, false, false],
    dateOfBirth: student.dateOfBirth,
    fathersName: student.fathersName,
    mothersName: student.mothersName,
    lastScore: student.lastScore
  })
  this.form.disable();
}
}


