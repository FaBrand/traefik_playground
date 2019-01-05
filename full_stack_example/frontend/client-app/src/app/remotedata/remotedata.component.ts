import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { timer, Observable } from 'rxjs';
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-remotedata',
  templateUrl: './remotedata.component.html',
  styleUrls: ['./remotedata.component.css']
})
export class RemotedataComponent implements OnInit {
  numbers$: Observable<number[]>;

  constructor(private apiService: ApiserviceService) { 
    // Use a timer instead of an interval to get data on first load
    this.numbers$ = timer(0, 2500).pipe(
      switchMap(() => this.apiService.getData())
      );
  }

  ngOnInit() { }
}
