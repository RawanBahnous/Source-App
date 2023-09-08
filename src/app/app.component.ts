import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  showloader:boolean = true;


  title = 'resourcesystem';

  ngOnInit(): void {
    setTimeout(() => {
      this.showloader = false;
    }, 2000);
  }

}
