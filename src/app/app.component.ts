import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  jobTitle =
  ["C# Developer", "Java Developer", ".Net Developer", "Script Developer", "HR Assistant",
   "C# Developer", "Java Developer", ".Net Developer", "Script Developer", "HR Assistant",
   "C# Developer", "Java Developer", ".Net Developer", "Script Developer", "HR Assistant"];
  constructor() {}
  ngOnInit() {}
}
