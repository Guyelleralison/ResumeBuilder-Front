import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CareerComponent} from "./career.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CareerRoutingModule} from "./career-routing.module";



@NgModule({
  declarations: [CareerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CareerRoutingModule
  ]
})
export class CareerModule { }
