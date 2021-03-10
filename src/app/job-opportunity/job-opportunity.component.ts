import {Component, OnInit } from '@angular/core';

import jobData from '../data';
@Component({
  selector: 'job-opportunity',
  templateUrl: './job-opportunity.component.html',
  styleUrls: ['./job-opportunity.component.scss']
})
export class JobOpportunityComponent implements OnInit {
  list: Array<Object>;
  filters: Array<String>;

  constructor() {
    this.filters = [];
    this.list = [{}];
  }

  ngOnInit(): void {
    this.list = jobData.jobData.items;
    console.log(this.list);
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
