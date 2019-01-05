import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newnumbers',
  templateUrl: './newnumbers.component.html',
  styleUrls: ['./newnumbers.component.css']
})
export class NewnumbersComponent implements OnInit {
  public newNumbers: string = "";

  constructor() { }

  ngOnInit() {
  }

}
