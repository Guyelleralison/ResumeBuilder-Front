import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConfigComponent} from "./config.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SortByPipe } from 'src/app/shared/pipes/sort.pipe';



@NgModule({
  declarations: [ConfigComponent, SortByPipe],
    imports: [
        CommonModule,
      FormsModule,
        ReactiveFormsModule
  ],
    exports: [SortByPipe]
})
export class ConfigModule { }
