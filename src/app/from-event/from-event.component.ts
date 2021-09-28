import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  @ViewChild('addButton') addButton:ElementRef | undefined;

  constructor(private Service:CommonserviceService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    let count = 0;
    fromEvent(this.addButton?.nativeElement,"click").subscribe(res=>{ 
      let data="Video "+ count++;
      // console.log(data); 
      this.Service.printValue(data,'container');
    });
  }

}
