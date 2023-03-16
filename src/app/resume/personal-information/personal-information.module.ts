import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PersonalInformationComponent} from "./personal-information.component";
import {FormsModule} from "@angular/forms";
import {PersonalInformationRoutingModule} from "./personal-information-routing.module";



@NgModule({
    declarations: [PersonalInformationComponent],
    exports: [
        PersonalInformationComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        PersonalInformationRoutingModule
    ]
})
export class PersonalInformationModule { }
