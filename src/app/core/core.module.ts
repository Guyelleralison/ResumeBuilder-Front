import {LOCALE_ID, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {httpInterceptorProviders} from "./interceptors";
import {FormsModule} from "@angular/forms";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    SidebarComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    httpInterceptorProviders
  ]
})
export class CoreModule { }
