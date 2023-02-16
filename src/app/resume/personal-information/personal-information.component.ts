import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable} from 'rxjs';
import { OnCreateForm } from 'src/app/interfaces/on-create-form';
import { Candidate } from 'src/app/models/candidate.model';
import { CandidateService } from 'src/app/services/candidate.service';

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
  candidate$!: Observable<Candidate[]>;
  candidateId!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private candidateService: CandidateService
  ) { }
  
  onClickNextPage(): void {
    throw new Error('Method not implemented.');
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
      this.candidateService.getCandidate(params['id'])
      .subscribe(value => {
        this.lastName = value.lastName;
        this.firstName = value.firstName;
        this.email = value.email;
        this.gender = value.gender;
        this.dateOfBirth = new Date(value.dateOfBirth);
        this.matricule = value.matricule;
        this.status = value.status
      }
    )
    });
    
  }

  onSubmitForm(form?: NgForm) {
    if (form) {
        console.log(form.value);
      }
    this.router.navigate(['/experiences']);
  }

}
