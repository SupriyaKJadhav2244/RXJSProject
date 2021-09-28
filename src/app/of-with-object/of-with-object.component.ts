import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of-with-object',
  templateUrl: './of-with-object.component.html',
  styleUrls: ['./of-with-object.component.css']
})
export class OfWithObjectComponent implements OnInit {
  Info:any;

  constructor() { }

  ngOnInit(): void {
    let data = of({a:'Supriya',b:'Sandhya',c:'Shailaja'});
    data.subscribe(res=>{ 
    // console.log(res); 
    this.Info = res;
  });
  }

}
