import { NgModule } from '@angular/core';
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
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
