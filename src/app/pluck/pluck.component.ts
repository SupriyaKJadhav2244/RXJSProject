import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {

  Info = [
    {id:1,name:'Taehyung',gender:'Male'},
    {id:2,name:'Jimin',gender:'Male'},
    {id:3,name:'JK',gender:'Male'},
    {id:4,name:'RM',gender:'Male'},
    {id:5,name:'Suga',gender:'Male'},
    {id:6,name:'Jhope',gender:'Male'},
    {id:7,name:'Jin',gender:'Male'},
    {id:8,name:'Lisa',gender:'Female'},
    {id:9,name:'Jenni',gender:'Female'}
  ]
  data2: string[]=[];

  constructor() { }

  ngOnInit(): void {
    let data = from(this.Info);
    data.pipe(
      // map(data1=>data1.name),
      pluck('name'),
      toArray()
    ).subscribe(res=>{
      // console.log(res);
      this.data2=res;
    });
  }

}
