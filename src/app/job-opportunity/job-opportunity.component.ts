import { Component, OnInit } from '@angular/core';
import jobData from '../data';

@Component({
  selector: 'job-opportunity',
  templateUrl: './job-opportunity.component.html',
  styleUrls: ['./job-opportunity.component.scss']
})
export class JobOpportunityComponent implements OnInit {
  list!: Array<any>;
  filters: Array<string>;

  constructor() {
    this.filters = [];
  }

  ngOnInit(): void {
    this.list = jobData.jobData.items;
    this.list.sort((a, b) => {
      if (a.label.featured) return -1
      else
        return 1
    });
  }

  addToFilters(filter: string) {
    if (!this.filters.includes(filter)) {
      this.filters.push(filter);
    }

  }

  deleteAllFilters() {
    this.filters = [];
  }

  deleteFilter(filter: string) {
    const index = this.filters.indexOf(filter);
    if (index > -1) {
      this.filters.splice(index, 1);
    }
  }



}
