import { Component, Input, OnInit } from '@angular/core';
import { SidebarMenu } from './models/sidebar-menu.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input()
  elements!: SidebarMenu[];

  elementClicked!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.elementClicked = false;
    if (!this.elements) {
      this.elements = [
        {
          "elementName": 'Liste des candidats',
          "fontawesome": 'fa-user',
          "clicked": true
        },
        {
          "elementName": 'Paramètres',
          "fontawesome": 'fa-gear',
          "clicked": false
        }
      ]
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
