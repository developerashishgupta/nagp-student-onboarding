import { NgModule } from '@angular/core';
import {
  MatTabsModule, MatToolbarModule, MatFormFieldModule, MatInputModule,
  MatOptionModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule,
  MatCheckboxModule, MatButtonModule, MatCardModule,MatDialogModule, MatIconModule 
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
    MatDialogModule,
    MatIconModule
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
    MatDialogModule,
    MatIconModule
  ]
})
export class AngularMaterialModule { }
