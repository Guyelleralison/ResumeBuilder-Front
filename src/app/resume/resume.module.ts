import {LOCALE_ID, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CareerModule} from "./career/career.module";
import {EducationModule} from "./education/education.module";
import {ExperienceModule} from "./experience/experience.module";
import {PersonalInformationModule} from "./personal-information/personal-information.module";
import {ProfileModule} from "./profile/profile.module";
import {SkillModule} from "./skill/skill.module";
import {ResumeComponent} from "./resume.component";
import {ResumeRoutingModule} from "./resume-routing.module";

@NgModule({
  declarations: [ResumeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CareerModule,
    EducationModule,
    ExperienceModule,
    PersonalInformationModule,
    ProfileModule,
    SkillModule,
    ResumeRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ]
})
export class ResumeModule { }
