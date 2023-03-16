import { Injectable } from '@angular/core';
import { Formation } from '../models/formation.model';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor() { }

  getFormationsByProfile(profileId: string): Formation[] {
    return [
      {
        id: '1',
        diploma: 'Licence en Informatique L3',
        startDate: new Date('2016-09-12'),
        endDate: new Date('2019-09-13'),
        title: 'Formation universitaire Dev web',
        location: 'Antananarivo',
        institute: 'IST'
      },
      {
        id: '2',
        diploma: 'Master 1 en Informatique',
        startDate: new Date('2019-11-12'),
        endDate: new Date('2020-12-13'),
        title: 'Master universitaire Machine Learning',
        location: 'Antananarivo',
        institute: 'IST'
      }
    ];
  }
}
