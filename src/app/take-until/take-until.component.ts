import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.css']
})
export class TakeUntilComponent implements OnInit {

  sub!: Subscription;

  constructor(private Service:CommonserviceService) { }

  ngOnInit(): void {
    let count = interval(1000);
    let condition = timer(5000);
    let data = count.pipe(
      map(data1=>"Video "+data1),
      takeUntil(condition)
      ).subscribe(res=>{
      // console.log(res);

      this.Service.printValue(res,'call');
    })
  }

}
