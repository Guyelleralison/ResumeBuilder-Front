import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {

  lastName!: string;
  firstName!: string;
  matricule!: string;
  email!: string;
  status!: string;
  dateOfBirth!: string;
  gender!: string;
  description!: string;
  statusValues!: string[];
  genderValues!: string[];

  constructor() { }

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
    ]
  }

  onSubmitForm(form: NgForm) {
    console.log(form.value);
  }

}
