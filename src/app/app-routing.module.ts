import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigComponent } from './home/config/config.component';
import { HomeComponent } from './home/home.component';
import { CareerComponent } from './resume/career/career.component';
import { EducationComponent } from './resume/education/education.component';
import { ExperienceComponent } from './resume/experience/experience.component';
import { PersonalInformationComponent } from './resume/personal-information/personal-information.component';
import { ProfileComponent } from './resume/profile/profile.component';
import { SkillComponent } from './resume/skill/skill.component';
import { ResumeTemplateComponent } from './template/resume-template/resume-template.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'config', component: ConfigComponent
  },
  {
    path: 'info', component: PersonalInformationComponent
  },
  {
    path: 'experiences', component: ExperienceComponent
  },
  {
    path: 'skills', component: SkillComponent
  },
  {
    path: 'education', component: EducationComponent
  },
  {
    path: 'career', component: CareerComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'resume', component: ResumeTemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
