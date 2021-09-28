import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  count: any;
  videoSubscription!: Subscription;
  obsMsg: any;

  constructor(private Service:CommonserviceService) { }

  ngOnInit(): void {
    let data = timer(5000,2000);
    this.videoSubscription=data.subscribe(res=>{
      // console.log(res);
      this.count = res+1;
      this.obsMsg = "Video "+this.count;

      this.Service.printValue(this.count,'ListVideo');
      if(this.count >4){
        this.videoSubscription?.unsubscribe();
      }
    })
  }

}
