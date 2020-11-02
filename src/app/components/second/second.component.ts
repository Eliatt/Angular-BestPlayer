import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  teams = ['Newell\'s Old Boys', 'Barcelona Youth', 'Barcelona C', 'Barcelona B', 'Barcelona!']
  constructor() { }

  ngOnInit(): void {
  }

}
