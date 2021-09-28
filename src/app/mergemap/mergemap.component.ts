import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { delay, map, mergeAll, mergeMap } from 'rxjs/operators';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.css']
})
export class MergemapComponent implements OnInit {

  constructor(private Service:CommonserviceService) { }

  getData(value:any){ 
    return of(value+" Video Uploaded").pipe(delay(5000));
  }

  ngOnInit(): void {
    let data = ['Angular','JQuery','Javascript'];
    
    // from(data).pipe(
    //   map(res=>this.getData(res))
    // ).subscribe(res=>{
    //    res.subscribe(res1=>{
    //     //  console.log(res1); 

    //     this.Service.printValue(res1,'msgcall')
    //     }) 
    // })

    // from(data).pipe(
    //   map(res=>this.getData(res)),
    //   mergeAll()
    // ).subscribe(res=>{ 
    //     //  console.log(res); 

    //     this.Service.printValue(res,'msgcall') 
    // })

    from(data).pipe( 
      mergeMap(res=>this.getData(res)) 
    ).subscribe(res=>{ 
        //  console.log(res); 

        this.Service.printValue(res,'msgcall') 
    })
  }

}
