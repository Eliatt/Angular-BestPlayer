import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  name = '';
  player = 'Leonel  Messi';

  constructor() {}

  ngOnInit(): void {}
}
