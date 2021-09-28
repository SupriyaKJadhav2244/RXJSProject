import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {

  sub!: Subscription;
  myColor:any;

  constructor(private Service:CommonserviceService) { }

  ngOnInit(): void {
    let arr = ['red','purple','green','blue','black','yellow','orange'];
    let count = interval(1500);
    this.sub = count.pipe(
      tap(
        info=>{
          // console.log(arr[info]);
          this.myColor = arr[info]; 
         }
      ),
      map(data=>arr[data])
    ).subscribe(res=> { 
      // console.log(res);
      if(res=="orange"){
        this.sub.unsubscribe();
       }
      this.Service.printValue(res,'colorId')
    })
  }

}
