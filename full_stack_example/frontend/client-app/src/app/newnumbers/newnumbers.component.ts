import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';


@Component({
  selector: 'app-newnumbers',
  templateUrl: './newnumbers.component.html',
  styleUrls: ['./newnumbers.component.css']
})
export class NewnumbersComponent implements OnInit {
  public newNumbers: string = "";

  constructor(private apiService: ApiserviceService) { }

  addNewNumbers(){
    const string_array = this.newNumbers.split(' ');
    const number_array = string_array.map(chr => parseInt(chr));
    
    this.apiService.postData(number_array);

    this.newNumbers = "";
  }

  ngOnInit() {
  }

}
