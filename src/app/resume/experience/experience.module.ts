import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExperienceComponent} from "./experience.component";
import {FormsModule} from "@angular/forms";
import {ExperienceRoutingModule} from "./experience-routing.module";



@NgModule({
  declarations: [ExperienceComponent],
  imports: [
    CommonModule,
    FormsModule,
    ExperienceRoutingModule
  ]
})
export class ExperienceModule { }
