import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JobOpportunityComponent } from './job-opportunity/job-opportunity.component';
import { JobFilterPipe } from './job-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    JobOpportunityComponent,
    JobFilterPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [JobFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
