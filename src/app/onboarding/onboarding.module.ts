import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingFormComponent } from './onboarding-form/onboarding-form.component';
import { StudentListComponent } from './student-list/student-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentListCardComponent } from './student-list-card/student-list-card.component';
import { RouterModule } from '@angular/router';
import { OnboardRoutingModule } from './onboarding-routing.module';
import { SharedModule } from '../shared/shared.module'
@NgModule({
  declarations: [OnboardingFormComponent, StudentListComponent, DashboardComponent, StudentListCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule,
    OnboardRoutingModule,
    SharedModule
  ],
  exports: [OnboardingFormComponent, StudentListComponent]
})
export class OnboardingModule { }
