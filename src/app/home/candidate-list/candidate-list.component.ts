import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Candidate } from 'src/app/core/models/candidate.model';
import { CandidateService } from 'src/app/core/services/candidate.service';
import { ExperienceService } from 'src/app/core/services/experience.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent implements OnInit {

  candidateProfile$!: Observable<Candidate[]>;
  filterData!: Candidate[];
  experienceProfile$!: Observable<any>;

  constructor(
    private candidateService: CandidateService,
    private router: Router,
    private experienceService: ExperienceService
  ) { }

  ngOnInit(): void {
    this.candidateProfile$ = this.candidateService.getAllCandidateProfile();
  }

  onEditProfile(profileId: string, candidateId: string): void {
    this.router.navigate(['/resume/profile'], { queryParams: { id: candidateId, profileId } });
  }

  onShowProfile(profileId: string): void {

  }

  search(event: any): void {
    if (event) {
      console.log('event', event);

      // this.candidates$ = this.candidates$.pipe(
      //   map(candidates => candidates.filter(x => {
      //   x.firstName.trim().toLowerCase().includes(event.target.value.trim().toLowerCase()) ||
      //     x.lastName.trim().toLowerCase().includes(event.target.value.trim().toLowerCase()) ||
      //     x.profiles.find(profile => profile.title.trim().toLowerCase().includes(event.target.value.trim().toLowerCase()))
      // })));

      //console.log(this.candidates$);
    }
  }

  addNewProfile(id: string): void {
    console.log('id', id);

    this.router.navigate(['/resume/info'], { queryParams: { id: id } });
  }

}
