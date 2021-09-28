import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-map-with-object',
  templateUrl: './map-with-object.component.html',
  styleUrls: ['./map-with-object.component.css']
})
export class MapWithObjectComponent implements OnInit {

  constructor(private Service:CommonserviceService) { }

  ngOnInit(): void {
    let data = [
      {id:1,name:'Supriya'},
      {id:2,name:'Sandhya'},
      {id:3,name:'Shailaja'},
      {id:4,name:'Bhagyashree'},
      {id:5,name:'Kishan'}
    ]
    let info=from(data).pipe(map(data1=>data1.name)).subscribe(res=>{
      // console.log(res);
      this.Service.printValue(res,'callNames')
    })
  }

}
