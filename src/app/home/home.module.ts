import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home.component";
import {CandidateListComponent} from "./candidate-list/candidate-list.component";
import {ConfigComponent} from "./config/config.component";
import {CandidateListModule} from "./candidate-list/candidate-list.module";
import {ConfigModule} from "./config/config.module";
import {HomeRoutingModule} from "./home-routing.module";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CandidateListModule,
    ConfigModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
