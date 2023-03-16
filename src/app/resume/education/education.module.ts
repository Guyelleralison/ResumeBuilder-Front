import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EducationComponent} from "./education.component";
import {ReactiveFormsModule} from "@angular/forms";
import {EducationRoutingModule} from "./education-routing.module";



@NgModule({
  declarations: [EducationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EducationRoutingModule
  ]
})
export class EducationModule { }
