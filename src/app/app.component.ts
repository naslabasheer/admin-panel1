import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-panel';
  sideBarOpen=true;
  ngOnInit(){}
  sideBarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
  }
}
