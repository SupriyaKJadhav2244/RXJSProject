import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { take } from 'rxjs/operators';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {
  people: any;

  constructor(private Service:CommonserviceService) { }

  ngOnInit(): void {
    let data =['Supriya','Sandhya','Shailaja','Prashant'];
    let Info = from(data).pipe(take(3)).subscribe(res=>{
      // console.log(res);
      this.people = res;

      this.Service.printValue(this.people,'takeData');
    })
  }

}
