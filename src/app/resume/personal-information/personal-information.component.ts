import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router, Event } from '@angular/router';
import { Observable, tap} from 'rxjs';
import { OnCreateForm } from 'src/app/interfaces/on-create-form';
import { Candidate } from 'src/app/models/candidate.model';
import { CandidateService } from 'src/app/services/candidate.service';
import { SidebarMenuService } from 'src/app/services/sidebar-menu.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit, OnCreateForm {

  lastName!: string;
  firstName!: string;
  matricule!: string;
  gender!: string;
  email!: string;
  biography!: string;
  status!: string;
  dateOfBirth!: Date;
  statusValues!: string[];
  genderValues!: string[];
  candidate!: Candidate;
  candidate$!: Observable<Candidate>;
  candidateId!: string;
  currentRoute!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private candidateService: CandidateService,
    private sideBarMenuService: SidebarMenuService
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        
      };
    });
   }

  ngOnInit(): void {
    this.statusValues = [
      'Célibataire',
      'Divorcé(e)',
      'Fiancé(e)',
      'Marié(e)',
      'Veuf(ve)'
    ];

    this.genderValues = [
      'Féminin',
      'Masculin'
    ];

    this.route.queryParams.subscribe(params => {
      this.candidate$ = this.candidateService.getCandidate(params['id']).pipe(
        tap((value) => {
          this.candidateId = params['id'];
          this.lastName = value.lastName;
          this.firstName = value.firstName;
          this.email = value.email;
          this.gender = value.gender;
          this.dateOfBirth = new Date(value.dateOfBirth);
          this.matricule = value.matricule;
          this.status = value.status
        })
      );
    });
    
    
  }

  onSubmitForm(form?: NgForm, currentRoute?:string) {
    if (form) {
      console.log(form.value);
    }
    
    this.onClickNextPage(currentRoute);
  }

  onClickPreviousPage(): void {
    throw new Error('Method not implemented.');
  }
  
  onClickNextPage(currentRoute?:string): void {
    const currentSideBarMenuActive = this.sideBarMenuService.getCurrentActiveSideBar(currentRoute);
    console.log(currentSideBarMenuActive);
    
    this.router.navigate([`${ currentSideBarMenuActive?.nextLink }`], { queryParams: { id: this.candidateId } });
  }

}
