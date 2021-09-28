import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',  
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {

  constructor(private Service:CommonserviceService) { }

  ngOnInit(): void {
    let data = from(['Angular','Javascript','JQuery']);
    data.subscribe(res=>{
      // console.log(res);
      this.Service.printValue(res,'box1');
    });
  }

}
