import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, ValidatorFn, AbstractControl } from "@angular/forms";
import { Student } from '../../shared/models/student.interface'
import { StudentCategory } from '../../shared/enums/student-category-enum';
import { StudentService } from '../../shared/services/student.service'
import { ActivatedRoute, Router } from '@angular/router';
import { IDocument } from '../../shared/models/document.interface';
import { DocumentService } from '../../shared/services/documents/document.service'

@Component({
  selector: 'app-onboarding-form',
  templateUrl: './onboarding-form.component.html',
  styleUrls: ['./onboarding-form.component.css']
})
export class OnboardingFormComponent implements OnInit {

  form: FormGroup;
  student: Student;
  categories: string[];
  documentsFormArrray: FormArray;
  isEditMode: boolean = false;
  isViewMode: boolean = false;
  studentId: number;
  documentList: IDocument[];
  constructor(private formBuilder: FormBuilder, private studentService: StudentService,
    private route: ActivatedRoute, private documentService: DocumentService,private router: Router) {
    this.categories = Object.keys(StudentCategory).filter(k => typeof StudentCategory[k as any] === "number"); 
  }

  ngOnInit() {
    this.createform();

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
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      category: ['', [Validators.required]],
      documents: new FormArray([]),
      dateOfBirth: [, [Validators.required]],
      fathersName: ['', [Validators.required]],
      mothersName: ['', [Validators.required]],
      lastScore: ['', [Validators.required, Validators.max(100), Validators.min(0)]],
    })
    this.documentsFormArrray = this.form.controls.documents as FormArray;
  }

  getDocuments(category:string){
   return  this.documentService.getDocuments(category);
  }

  setDocumentFormArray(category:string){
    this.getDocuments(category).subscribe(documents => {
      this.documentList = documents;
        this.loadDocuments(this.documentList);
      });
  }

  loadDocuments(documents:IDocument[]): void {
    while (this.documentsFormArrray.length !== 0) {
      this.documentsFormArrray.removeAt(0)
    }
    documents.forEach(((item, index) => {
      this.documentsFormArrray.push(this.formBuilder.control(''));
    }));
  }

  onboardButtonClicked(event: Event) {
    if (this.isEditMode) {
      this.studentService.updateStudent(this.studentId, this.form.value);
      this.router.navigate(['dashboard/list']);
    }
    else {
      this.studentService.onboardStudent(this.form.value);
      this.form.reset();
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
    this.getDocuments(student.category).subscribe(documents => {
      this.documentList = documents;
        this.loadDocuments(this.documentList);
        this.form.patchValue({
          name: student.name,
          category: student.category,
          documents: student.documents,
          dateOfBirth: student.dateOfBirth,
          fathersName: student.fathersName,
          mothersName: student.mothersName,
          lastScore: student.lastScore
        })
      });
    
  }

  viewStudent(student: Student) {
    this.getDocuments(student.category).subscribe(documents => {
      this.documentList = documents;
        this.loadDocuments(this.documentList);
        this.form.setValue({
          name: student.name,
          category: student.category,
          documents: student.documents,
          dateOfBirth: student.dateOfBirth,
          fathersName: student.fathersName,
          mothersName: student.mothersName,
          lastScore: student.lastScore
        })
        this.form.disable();
      });
    
  }

}


