import { Component } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resume-builder';
  resumeBuilderScreen: boolean = false;
  currentRoute!: string;

  constructor(private router: Router) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        if (this.currentRoute.includes('/info')) {
          this.resumeBuilderScreen = true;
        }
      }
    })
   }
  
  navigateToResumeBuilder(): void {
    this.resumeBuilderScreen = true;
    this.router.navigate(['/info']);
  }

  showResumeTemplate(): void {
    this.router.navigateByUrl('resume');
  }

  navigateToCandidateList(): void {
    this.resumeBuilderScreen = false;
    this.router.navigateByUrl('');
  }
}
