import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resume-builder';
  resumeBuilderScreen: boolean = false;

  constructor(private router: Router) { }
  
  navigateToResumeBuilder(): void {
    this.resumeBuilderScreen = true;
    this.router.navigateByUrl('info');
  }

  showResumeTemplate(): void {
    this.router.navigateByUrl('resume');
  }
}
