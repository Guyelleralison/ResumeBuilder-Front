import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OnCreateForm } from 'src/app/interfaces/on-create-form';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit, OnCreateForm {

  personalInformationForm!: FormGroup;
  statusValues!: string[];
  genderValues!: string[];

  constructor(private formBuilder: FormBuilder, private router: Router) { }
  
  onClickNextPage(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.personalInformationForm = this.formBuilder.group({
      lastName: [null, Validators.required],
      firstName: [null, Validators.required],
      matricule: [null, Validators.required],
      email: [null, Validators.required],
      status: [null],
      dateOfBirth: [null, Validators.required],
      gender: [null, Validators.required],
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
    this.router.navigate(['/experiences']);
  }

}
