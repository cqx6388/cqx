import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalComponent } from './personal/personal.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { ProjectComponent } from './project/project.component';
import { JobComponent } from './job/job.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { VisitorComponent } from './visitor/visitor.component';

const routes: Routes = [
  { path: 'Personal', component: PersonalComponent },
  { path: 'Education', component: EducationComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Work', component: WorkComponent },
  { path: 'Project', component: ProjectComponent },
  { path: 'Job', component: JobComponent },
  { path: 'Evaluation', component: EvaluationComponent },
  { path: 'Visitor', component: VisitorComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
