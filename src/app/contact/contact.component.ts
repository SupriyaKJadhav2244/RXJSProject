import { Component, OnInit } from '@angular/core';
import { concat, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  ComedyVideo = interval(1000).pipe(take(3),map(data=>'Comedy Video '+(data+1)));
  NewsVideo = interval(3000).pipe(take(4),map(data=>'News Video '+(data+1)));
  SongVideo = interval(2000).pipe(take(5),map(data=>'Song Video '+(data+1)));

  constructor(private Service:CommonserviceService) { }

  ngOnInit(): void {
    let TotalVideo = concat(this.ComedyVideo,this.NewsVideo,this.SongVideo).subscribe(res=>{ 
      // console.log(res);
      this.Service.printValue(res,'value');
    });
  }

}
