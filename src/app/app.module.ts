import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ConfigComponent } from './home/config/config.component';
import { CandidateListComponent } from './home/candidate-list/candidate-list.component';
import { PersonalInformationComponent } from './resume/personal-information/personal-information.component';
import { ExperienceComponent } from './resume/experience/experience.component';
import { SkillComponent } from './resume/skill/skill.component';
import { CareerComponent } from './resume/career/career.component';
import { ProfileComponent } from './resume/profile/profile.component';
import { EducationComponent } from './resume/education/education.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResumeTemplateComponent } from './template/resume-template/resume-template.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { httpInterceptorProviders } from './interceptors';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    ConfigComponent,
    CandidateListComponent,
    PersonalInformationComponent,
    ExperienceComponent,
    SkillComponent,
    CareerComponent,
    ProfileComponent,
    EducationComponent,
    ResumeTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
