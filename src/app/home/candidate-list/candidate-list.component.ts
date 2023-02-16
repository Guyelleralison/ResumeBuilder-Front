import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { Candidate } from 'src/app/models/candidate.model';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent implements OnInit {

  candidates$!: Observable<Candidate[]>;
  filterData!: Candidate[];

  constructor(private candidateService: CandidateService, private router: Router) { }

  ngOnInit(): void {
    this.candidates$ = this.candidateService.getCandidateList();
    this.candidates$.subscribe(candidate=>this.filterData = candidate);
    console.log(this.filterData);
    
  }

  onEditProfile(profileId: string): void {

  }

  onShowProfile(profileId: string): void {

  }

  search(event: any): void {
    if(event) {
      this.candidates$ = this.candidates$.pipe(map(candidates => candidates.filter(x => {
        x.firstName.trim().toLowerCase().includes(event.target.value.trim().toLowerCase()) ||
          x.lastName.trim().toLowerCase().includes(event.target.value.trim().toLowerCase()) ||
          x.profiles.find(profile => profile.title.trim().toLowerCase().includes(event.target.value.trim().toLowerCase()))
      })));

      this.candidates$ = this.candidates$.pipe(filter(value => value.length === 0));
    }
  }

  addNewProfile(id: string): void {
    this.router.navigate(['/info'], { queryParams: { id: id } });
  } 

}
