import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

    subscription!: Subscription;
    response: any;

  constructor(private Service:CommonserviceService) { }

  ngOnInit(): void {
    let data = interval(1000);
    this.subscription=data.pipe(
      map(data1=>(data1+1)*10)
    ).subscribe(res=>{
      // console.log(res); 
      this.response=res;
      this.Service.printValue(this.response,'callVideos');
    }); 
    setTimeout(()=>{
      this.subscription.unsubscribe();
    },10000);
  }

}
