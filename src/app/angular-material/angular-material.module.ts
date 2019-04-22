import { NgModule } from '@angular/core';
import {
  MatTabsModule, MatToolbarModule, MatFormFieldModule, MatInputModule,
  MatOptionModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule,
  MatCheckboxModule, MatButtonModule, MatCardModule,MatDialogModule 
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatTabsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule
  ],
  exports: [MatTabsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule
  ]
})
export class AngularMaterialModule { }
