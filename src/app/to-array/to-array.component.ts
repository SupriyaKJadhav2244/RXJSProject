import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { toArray } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {

  Info = [
    {id:1,name:'Taehyung',gender:'Male',profession:{job:'Singer'}},
    {id:2,name:'Jimin',gender:'Male',profession:{job:'Singer'}},
    {id:3,name:'JK',gender:'Male',profession:{job:'Singer'}},
    {id:4,name:'RM',gender:'Male',profession:{job:'Singer'}},
    {id:5,name:'Suga',gender:'Male',profession:{job:'Singer'}},
    {id:6,name:'Jhope',gender:'Male',profession:{job:'Singer'}},
    {id:7,name:'Jin',gender:'Male',profession:{job:'Singer'}},
    {id:8,name:'Lisa',gender:'Female',profession:{job:'Singer'}},
    {id:9,name:'Jenni',gender:'Female',profession:{job:'Singer'}}
  ]
  data1: { id: number; name: string; gender: string; profession: { job: string; }; }[]=[];

  constructor() { }

  ngOnInit(): void {
    let data = from(this.Info);
    data.pipe(
      toArray()
    ).subscribe(res=>{ 
      // console.log(res);
      this.data1 = res;
      // console.log(this.data1);
    });
  }

}
