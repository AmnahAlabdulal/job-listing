import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JobOpportunityComponent } from './job-opportunity/job-opportunity.component';


@NgModule({
  declarations: [
    AppComponent,
    JobOpportunityComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
