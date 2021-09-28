import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.css']
})
export class OfComponent implements OnInit {
  Info:any;

  constructor(private Service:CommonserviceService) { }

  ngOnInit(): void {
    let data = of('Supriya','Sandhya','Shailaja','Prashant','Bhagyashree','Kishan');
    data.subscribe(res=>{ 
      // console.log(res);
      this.Service.printValue(res,'ListId');
    });  
  }

}
