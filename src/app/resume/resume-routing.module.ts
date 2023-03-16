import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PersonalInformationComponent} from "./personal-information/personal-information.component";
import {ResumeComponent} from "./resume.component";
import {ExperienceComponent} from "./experience/experience.component";
import {SkillComponent} from "./skill/skill.component";
import {EducationComponent} from "./education/education.component";
import {ProfileComponent} from "./profile/profile.component";
import {CareerComponent} from "./career/career.component";

const routes: Routes = [
  {
    path: '', component: ResumeComponent
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
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'career', component: CareerComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeRoutingModule {}
