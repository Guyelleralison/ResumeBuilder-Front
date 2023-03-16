import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { SidebarMenuService } from './core/services/sidebar-menu.service';
import { SidebarMenu } from './core/sidebar/models/sidebar-menu.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'resume-builder';
  resumeBuilderScreen: boolean = false;
  currentRoute!: string;
  sideBarToLoad!: SidebarMenu[];

  constructor(private router: Router, private sidebarMenuService: SidebarMenuService) {
    this.sideBarToLoad = this.sidebarMenuService.getHomeSidebarMenu();
  }

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        if (this.currentRoute.includes('resume')) {
          this.resumeBuilderScreen = true;
          this.sideBarToLoad = this.sidebarMenuService.getResumeBuilderMenu();
        } else {
          this.sideBarToLoad = this.sidebarMenuService.getHomeSidebarMenu();
        }
      }
    })
  }

  navigateToResumeBuilder(): void {
    this.resumeBuilderScreen = true;
    this.router.navigateByUrl('resume/info');
  }

  navigateToCandidateList(): void {
    this.resumeBuilderScreen = false;
    this.router.navigateByUrl('home');
  }
}
