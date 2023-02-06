import { Injectable } from '@angular/core';
import { Career } from '../models/career.model';

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  constructor() { }

  getCareersByProfile(idProfile: string): Career[] {
    return [
      {
        id: '1',
        position: 'Developpeur JAVA',
        company: 'Etech consulting',
        startDate: new Date('2021-06-12'),
        endDate: new Date('2022-01-30'),
        isCurrentPosition: false
      },
      {
        id: '2',
        position: 'Developpeur Angular',
        company: 'Etech consulting',
        startDate: new Date('2022-01-30'),
        isCurrentPosition: true
      }
    ];
  }
}
