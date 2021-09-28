import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { takeLast } from 'rxjs/operators';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-take-last',
  templateUrl: './take-last.component.html',
  styleUrls: ['./take-last.component.css']
})
export class TakeLastComponent implements OnInit {
  people: any;

  constructor(private Service:CommonserviceService) { }

  ngOnInit(): void { 
    let data =['Supriya','Sandhya','Shailaja','Prashant'];
    let Info = from(data).pipe(takeLast(3)).subscribe(res=>{
      // console.log(res);
      this.people = res;

      this.Service.printValue(this.people,'listCalled');
    })
  }

}
