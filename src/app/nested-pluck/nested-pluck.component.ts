import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-nested-pluck',
  templateUrl: './nested-pluck.component.html',
  styleUrls: ['./nested-pluck.component.css']
})
export class NestedPluckComponent implements OnInit {

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
  
  data2: string[]=[]; 

  constructor() { }

  ngOnInit(): void {
    let data = from(this.Info);
    data.pipe(
      pluck('profession','job'), 
      toArray()
    ).subscribe(res=>{
      // console.log(res);
      this.data2=res;
    });
  }

}
