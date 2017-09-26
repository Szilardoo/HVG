import { Component, OnInit } from '@angular/core';
import { Informations } from '../informations.service'

@Component({
  selector: 'app-job-information',
  templateUrl: './job-information.component.html',
  styleUrls: ['./job-information.component.css']
})
export class JobInformationComponent implements OnInit {


  data = this.informationsService.headLine;
  ngForListData;

  constructor(public informationsService:Informations) { 
    this.ngForListData = this.informationsService.listDATA.split("$");
  }

  ngOnInit() {
  }

}
