import { Component, Input, OnInit } from '@angular/core';
import { SidebarMenuService } from '../services/sidebar-menu.service';
import { SidebarMenu } from './models/sidebar-menu.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  elements!: SidebarMenu[];

  elementClicked!: boolean;

  @Input()
  onHomePage!: boolean;

  @Input()
  onResumeBuilderPage!: boolean;

  constructor(private sidebarMenuService: SidebarMenuService) { }

  ngOnInit(): void {
    this.elementClicked = false;
    if (this.onHomePage) {
      this.elements = this.sidebarMenuService.getHomeSidebarMenu();
    }
    if (this.onResumeBuilderPage) {
      this.elements = this.sidebarMenuService.getResumeBuilderMenu();
    }
  }

  onMenuElementClicked(element: SidebarMenu): void  {
    this.elements.forEach(currentElement => {
      if (currentElement.elementName === element.elementName) {
        element.clicked = !element.clicked;
      }
      if (currentElement.clicked === true && currentElement.elementName !== element.elementName) {
        currentElement.clicked = false;
      }
      
    });
  }

}
