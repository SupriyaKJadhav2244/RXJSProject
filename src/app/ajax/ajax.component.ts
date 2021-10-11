import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent implements OnInit {
  Info: any;

  constructor() { }

  ngOnInit(): void { 
    ajax({
      url:'http://dummy.restapiexample.com/api/v1/employees',
      method: 'GET'   
    }).subscribe(info=>{
    // console.log(info.response.data); 
    this.Info=info.response.data;
  });  
  }   
}

