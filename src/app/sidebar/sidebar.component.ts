import { Component, Input, OnInit } from '@angular/core';
import { SidebarMenu } from './models/sidebar-menu.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input()
  sideBarToLoad!: SidebarMenu[];

  constructor() { }

  ngOnInit(): void {}

  onMenuElementClicked(element: SidebarMenu): void  {
    this.sideBarToLoad.forEach(currentElement => {
      if (currentElement.elementName === element.elementName) {
        element.clicked = !element.clicked;
      }
      if (currentElement.clicked === true && currentElement.elementName !== element.elementName) {
        currentElement.clicked = false;
      }
      
    });
  }

}
