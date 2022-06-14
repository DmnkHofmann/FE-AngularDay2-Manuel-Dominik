import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cars: {name: string, color: string}[] = [{
    name: "VW",
    color: "red"
  },{
    name: "BMW",
    color: "blue"
  },{
    name: "Mercedes",
    color: "pink"
  },{
    name: "Tesla",
    color: "burned"
  },{
    name: "Fiat",
    color: "green"
  },] 

}
