import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CandidateListComponent} from "./candidate-list.component";



@NgModule({
  declarations: [CandidateListComponent],
  imports: [
    CommonModule
  ],
  exports: [CandidateListComponent]
})
export class CandidateListModule { }
