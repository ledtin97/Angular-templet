import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public tasks: Array<object> = [
    {name: 'Angular', status: 'studing'},
    {name: 'React', status: 'completed'}
  ];
  constructor() { }

  ngOnInit() {
    
  }

}
