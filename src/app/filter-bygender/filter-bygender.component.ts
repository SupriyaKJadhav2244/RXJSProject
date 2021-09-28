import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter-bygender',
  templateUrl: './filter-bygender.component.html',
  styleUrls: ['./filter-bygender.component.css']
})
export class FilterBygenderComponent implements OnInit {
  
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
  res: { id: number; name: string; gender: string; }[]=[];

  constructor() { }

  ngOnInit(): void {
    let data = from(this.Info).pipe( 
      filter(member=>member.gender=="Male"),
      toArray()
    ).subscribe(res=>{ 
      // console.log(res);
      this.res = res;
    })
  }

}