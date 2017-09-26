import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EachJobInformationService } from '../each-job-information.service'
import { Informations } from '../informations.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'app';
  
  jobTitle =
  ["C# Developer", "Java Developer", ".Net Developer", "Script Developer", "HR Assistant",
   "C# Developer", "Java Developer", ".Net Developer", "Script Developer", "HR Assistant",
   "C# Developer", "Java Developer", ".Net Developer", "Script Developer", "HR Assistant"];
  constructor(private router:Router, public jobService:EachJobInformationService, public informationsService:Informations ) {}
  ngOnInit() {}

  goToJobInformationPage(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    console.log(value.split(" ")[0]);
    this.getDataFromService(value.split(" ")[0]);
    this.router.navigate(['job_information']);
  }

  getDataFromService(JobTitle) {
    var informations = this.jobService.jobEveryInfo[JobTitle].split("ß");
    console.log(informations[0]);
    this.informationsService.headLine = informations[0] || "";
    this.informationsService.everyOtherData = informations[1] || "";
    this.informationsService.listDATA = informations[2] || "";
    console.log(this.informationsService.headLine);
  }

}
