import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { delay, map, switchAll, switchMap } from 'rxjs/operators';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {

  constructor(private Service:CommonserviceService) { }

  getData(value:any){ 
    return of(value+" Video Uploaded").pipe(delay(5000));
  }

  ngOnInit(): void {
    let data = ['Angular','JQuery','Javascript'];

    // from(data).pipe(
    //   map(res=>this.getData(res)),
    //   switchAll()
    // ).subscribe(res=>{ 
    //     //  console.log(res); 

    //     this.Service.printValue(res,'switchId') 
    // })

    from(data).pipe( 
      switchMap(res=>this.getData(res)) 
    ).subscribe(res=>{ 
        //  console.log(res); 

        this.Service.printValue(res,'switchId') 
    })
  }   

}
