import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { JobInformationComponent } from './job-information/job-information.component';
import { HomeComponent } from './home/home.component';
import { EachJobInformationService } from './each-job-information.service'
import { Informations } from './informations.service'

const route =
 [{path: "job_information", component: JobInformationComponent},
 { path: '', component: HomeComponent}];

@NgModule({
  declarations: [
    AppComponent,
    JobInformationComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(route),
    BrowserModule
  ],
  providers: [EachJobInformationService, Informations],
  bootstrap: [AppComponent]
})
export class AppModule { }
