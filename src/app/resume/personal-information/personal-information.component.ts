import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {

  personalInformationForm!: FormGroup;
  statusValues!: string[];
  genderValues!: string[];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.personalInformationForm = this.formBuilder.group({
      lastName: [null],
      firstName: [null],
      matricule: [null],
      email: [null],
      status: [null],
      dateOfBirth: [null],
      gender: [null],
      description: [null]
    });

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

  onSubmitForm() {
    console.log(this.personalInformationForm.value);
  }

}
