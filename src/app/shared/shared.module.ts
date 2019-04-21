import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { LocalStorageDataService } from './services/data-local-storage.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FilterStudentPipe } from './pipes/filter-student.pipe';

@NgModule({
  declarations: [HeaderComponent, PageNotFoundComponent,FilterStudentPipe],
  imports: [
    CommonModule,
    AngularMaterialModule,
  ],
  exports: [HeaderComponent,FilterStudentPipe],
  providers : [LocalStorageDataService]
})
export class SharedModule { }
