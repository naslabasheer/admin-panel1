import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
 
  EventEmitter:any
  @Output() toggleSlidebarForMe : EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  togglesidebar(){
this.toggleSlidebarForMe.emit();
  }
 

}
