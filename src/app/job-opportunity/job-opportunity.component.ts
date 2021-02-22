import { Component, OnInit } from '@angular/core';
import jobData from '../data';
@Component({
  selector: 'job-opportunity',
  templateUrl: './job-opportunity.component.html',
  styleUrls: ['./job-opportunity.component.scss']
})
export class JobOpportunityComponent implements OnInit {
  list: Array<Object>;
  constructor() {
    this.list = jobData.jobData.items;
    console.log(this.list);
  }

  ngOnInit(): void {

  }

}
