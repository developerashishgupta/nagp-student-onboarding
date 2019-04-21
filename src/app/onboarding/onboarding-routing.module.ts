import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OnboardingFormComponent } from './onboarding-form/onboarding-form.component'
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [{
  path: '', component: DashboardComponent, canActivate: [AuthGuard],
  children: [
    { path: 'form', component: OnboardingFormComponent },
    { path: 'editForm/:id', component: OnboardingFormComponent },
    { path: 'viewForm/:id', component: OnboardingFormComponent },
    { path: 'list', component: StudentListComponent },
    
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardRoutingModule { }
