import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { PersonalComponent } from './personal/personal.component';
import { EducationComponent } from './education/education.component';
import { ProjectComponent } from './project/project.component';
import { JobComponent } from './job/job.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { WorkComponent } from './work/work.component';
import { SideBarItemComponent } from './side-bar-item/side-bar-item.component';
import { HomeComponent } from './home/home.component';

import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

import { NgxEchartsModule } from 'ngx-echarts';
import { LangPipePipe } from './lang-pipe.pipe';
import { LanguageService } from './language.service';
import { VisitorRegService } from './visitor-reg.service';

import {ParticlesModule} from 'angular-particle';
import { VisitorComponent } from './visitor/visitor.component';
import { FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    EducationComponent,
    WorkComponent,
    ProjectComponent,
    JobComponent,
    EvaluationComponent,
    SideBarItemComponent,
    HomeComponent,
    LangPipePipe,
    VisitorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    NgxEchartsModule,
    MatMenuModule,
    MatDividerModule,
    MatCardModule,
    ParticlesModule,
    FormsModule
  ],
  providers: [
    LanguageService,
    VisitorRegService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

