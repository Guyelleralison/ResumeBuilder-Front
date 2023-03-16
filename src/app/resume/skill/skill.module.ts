import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SkillComponent} from "./skill.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SkillRoutingModule} from "./skill-routing.module";



@NgModule({
  declarations: [SkillComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SkillRoutingModule
  ]
})
export class SkillModule { }
