import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {
  obsMsg: any;
  videoSubscription!: Subscription;
  count: any;

  constructor(private Service:CommonserviceService) { }

  ngOnInit(): void { 
    const data = interval(2000);
    this.videoSubscription = data.subscribe(res=>{
      // console.log(res);
      this.count = res+1;
      // console.log(this.count);
      this.obsMsg = "Video "+this.count;

      this.Service.printValue(this.obsMsg,'ListVideos');
      if(this.count >4){
        this.videoSubscription?.unsubscribe();
      }
     });
  }

}
