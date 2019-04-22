import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { LocalStorageDataService } from './services/data-local-storage.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FilterStudentPipe } from './pipes/filter-student.pipe';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { CategoryFilterPipe } from './pipes/category-filter/category-filter.pipe'

@NgModule({
  declarations: [HeaderComponent, PageNotFoundComponent,FilterStudentPipe, DeleteDialogComponent, CategoryFilterPipe],
  imports: [
    CommonModule,
    AngularMaterialModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  exports: [HeaderComponent,FilterStudentPipe,CategoryFilterPipe],
  providers : [LocalStorageDataService],
  entryComponents: [DeleteDialogComponent]
})
export class SharedModule { }
